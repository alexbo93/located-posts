import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { ADD_POST, GET_POSTS, REMOVE_POST, UPDATE_POST, setPosts, addPostSuccess, removePostSuccess, updatePostSuccess } from "./posts-actions";
import { ActionStandard, Post } from "../types";
import callApi from "../../utils/api-caller";
import { HTTP_METHODS } from "../../constants";

function* addPostSaga({ payload }: ActionStandard<Post>) {
  try {
    // SET LOADER?
    const addedPost = yield call(callApi, HTTP_METHODS.POST);
    yield put(addPostSuccess(addedPost));
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
  }
}

function* removePostSaga({ payload }: ActionStandard<number>) {
  try {
    // SET LOADER?
    const removedPost = yield call(callApi, HTTP_METHODS.DELETE, payload);
    yield put(removePostSuccess(removedPost));
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
  }
}
function* updatePostSaga({ payload }: ActionStandard<Post>) {
  try {
    // SET LOADER?
    const post = payload;
    const updatedPost = yield call(callApi, HTTP_METHODS.PUT, post.id, post);
    yield put(updatePostSuccess(updatedPost));
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
  }
}
function* getPostsSaga() {
  try {
    // SET LOADER?
    const posts = yield call(callApi);
    yield put(setPosts(posts));
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
