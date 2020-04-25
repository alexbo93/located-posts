import { all } from "redux-saga/effects";

import { currentPostSagas } from "../current-post";
import { postsSagas } from "../posts";

export default function* rootSagas() {
  yield all([
    ...currentPostSagas,
    ...postsSagas
  ]);
}