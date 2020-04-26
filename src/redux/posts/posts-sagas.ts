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
import { HTTP_METHODS } from '../../constants';
import { emptyCurrentPost } from 'redux/current-post';

function* addPostSaga({ payload }: ActionStandard<Post>) {
  try {
    // SET LOADER?
    const { data, status } = yield call(callApi, HTTP_METHODS.POST, undefined, payload);
    if (status === 201) {
      yield put(addPostSuccess(data));
    }
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
  }
}

function* removePostSaga({ payload }: ActionStandard<number>) {
  try {
    // SET LOADER?
    const { status } = yield call(callApi, HTTP_METHODS.DELETE, payload);
    if (status === 204) {
      yield put(removePostSuccess(payload));
    }
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
  }
}
function* updatePostSaga({ payload }: ActionStandard<Post>) {
  try {
    // SET LOADER?
    const post = payload;
    const { data, status } = yield call(callApi, HTTP_METHODS.PUT, post.id, post);
    if (status === 200) {
      yield put(updatePostSuccess(data));
      yield put(emptyCurrentPost());
    }
    console.log('handle errors in sagas');
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
  }
}
function* getPostsSaga() {
  try {
    // SET LOADER?
    const { data, status } = yield call(callApi);
    if (status === 200) {
      yield put(setPosts(data));
    }
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
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
