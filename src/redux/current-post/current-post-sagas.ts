import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { GET_POST, setCurrentPost } from './current-post-actions';
import { ActionStandard } from '../types';
import callApi from '../../utils/api-caller';
import { HTTP_METHODS, ERRORS } from '../../constants';
import { setError } from 'redux/messages';

function* getPostSaga({ payload }: ActionStandard<number>) {
  try {
    // SET LOADER?
    const { data, status } = yield call(callApi, HTTP_METHODS.GET, payload);
    if (status !== 200) {
      throw new Error();
    }

    yield put(setCurrentPost(data));
  } catch (error) {
    yield put(setError(ERRORS.POST_RETRIEVED));
  }
}

function* currentPostRootSaga() {
  yield all([yield takeLatest(GET_POST, getPostSaga)]);
}

const analyticsSagas = [fork(currentPostRootSaga)];

export default analyticsSagas;
