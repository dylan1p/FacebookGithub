import { all, fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const FETCH_FACEBOOK_PROJECTS_URL = "https://api.github.com/orgs/facebook/repos";
const FETCH_FACEBOOK_PROJECT_URL = "https://api.github.com/repos/facebook";

function getProjectDetails(projectName) {
  const projectDetails = axios.get(
    `${FETCH_FACEBOOK_PROJECT_URL}/${projectName}`
  );
  const projectContributors = axios.get(
    `${FETCH_FACEBOOK_PROJECT_URL}/${projectName}/contributors`
  );

  return Promise.all([projectDetails, projectContributors])
    .then(res => ({
      details: res[0].data,
      contributors: res[1].data
    }))
    .catch(err => {
      throw new Error(err);
    });
}

function* fetchProject({ projectName }) {
  try {
    const projectDetails = yield call(getProjectDetails, projectName);
    yield put({ type: "PROJECT_FETCH_SUCCEEDED", projectDetails });
  } catch (e) {
    yield put({ type: "PROJECT_FETCH_FAILED", message: e.message });
  }
}

function* watchFetchProject() {
  yield takeLatest("PROJECT_FETCH_REQUESTED", fetchProject);
}

function* fetchProjects() {
  try {
    const projects = yield call(axios.get, FETCH_FACEBOOK_PROJECTS_URL);
    yield put({ type: "PROJECTS_FETCH_SUCCEEDED", projects });
  } catch (e) {
    yield put({ type: "PROJECTS_FETCH_FAILED", message: e.message });
  }
}

function* watchFetchProjects() {
  yield takeLatest("PROJECTS_FETCH_REQUESTED", fetchProjects);
}

export default function* rootSaga() {
  yield all([fork(watchFetchProjects), fork(watchFetchProject)]);
}
