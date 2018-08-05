import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const FETCH_FACEBOOK_PROJECTS_URL = 'https://api.github.com/users/facebook/repos';

function *fetchProjects() {
  try {
    const projects = yield call(axios.get, FETCH_FACEBOOK_PROJECTS_URL);
    yield put({type: "PROJECTS_FETCH_SUCCEEDED", projects});
  } catch(e) {
    yield put({type: "PROJECTS_FETCH_FAILED", message: e.message});
  }
}

function *watchFetchProducts() {
  yield takeLatest('PROJECTS_FETCH_REQUESTED', fetchProjects)
}


export default function *rootSaga() {
  yield all([
    fork(watchFetchProducts)
  ])
}
