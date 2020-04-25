import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { GET_POST, setCurrentPost } from "./current-post-actions";
import { ActionStandard, Post } from "../types";
import callApi from "../../utils/api-caller";
import { HTTP_METHODS } from "../../constants";

function* addPostSaga({ payload }: ActionStandard<number>) {
  try {
    // SET LOADER?
    const post: Post = yield call(callApi, HTTP_METHODS.GET, payload);
    yield put(setCurrentPost(post));
  } catch (error) {
    console.error(error);
    // TODO: SHOW ANY KIND OF ERROR IN SCREEN (ERROR HANDLER)
  }
}

function* currentPostRootSaga() {
  yield all([yield takeLatest(GET_POST, addPostSaga)]);
}

const analyticsSagas = [fork(currentPostRootSaga)];

export default analyticsSagas;
