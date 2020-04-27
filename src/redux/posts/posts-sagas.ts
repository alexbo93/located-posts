import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import {
  ADD_POST,
  GET_POSTS,
  REMOVE_POST,
  UPDATE_POST,
  setPosts,
  addPostSuccess,
  removePostSuccess,
  updatePostSuccess,
} from './posts-actions';
import { ActionStandard, Post } from '../types';
import callApi from '../../utils/api-caller';
import { HTTP_METHODS, MESSAGES, ERRORS } from '../../constants';
import { emptyCurrentPost } from 'redux/current-post';
import { setMessage, setError } from 'redux/messages';

function* addPostSaga({ payload }: ActionStandard<Post>) {
  try {
    // SET LOADER?
    const { data, status } = yield call(callApi, HTTP_METHODS.POST, undefined, payload);
    if (status !== 201) {
      throw new Error();
    }
    yield put(addPostSuccess(data));
    yield put(setMessage(MESSAGES.POST_ADDED));
  } catch (error) {
    yield put(setError(ERRORS.ADD));
  }
}

function* removePostSaga({ payload }: ActionStandard<number>) {
  try {
    // SET LOADER?
    const { status } = yield call(callApi, HTTP_METHODS.DELETE, payload);
    if (status !== 204) {
      throw new Error();
    }
    yield put(removePostSuccess(payload));
    yield put(setMessage(MESSAGES.POST_REMOVED));
  } catch (error) {
    yield put(setError(ERRORS.REMOVE));
  }
}
function* updatePostSaga({ payload }: ActionStandard<Post>) {
  try {
    // SET LOADER?
    const post = payload;
    const { data, status } = yield call(callApi, HTTP_METHODS.PUT, post.id, post);
    if (status !== 200) {
      throw new Error();
    }
    yield put(updatePostSuccess(data));
    yield put(setMessage(MESSAGES.POST_UPDATED));
    yield put(emptyCurrentPost());
  } catch (error) {
    yield put(setError(ERRORS.UPDATE));
  }
}
function* getPostsSaga() {
  try {
    // SET LOADER?
    const { data, status } = yield call(callApi);
    if (status !== 200) {
      throw new Error();
    }
    yield put(setPosts(data));
  } catch (error) {
    yield put(setError(ERRORS.POSTS_RETRIEVED));
  }
}

function* postsRootSaga() {
  yield all([yield takeLatest(ADD_POST, addPostSaga)]);
  yield all([yield takeLatest(REMOVE_POST, removePostSaga)]);
  yield all([yield takeLatest(GET_POSTS, getPostsSaga)]);
  yield all([yield takeLatest(UPDATE_POST, updatePostSaga)]);
}

const analyticsSagas = [fork(postsRootSaga)];

export default analyticsSagas;
