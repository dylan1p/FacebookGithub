export default (prevState = {}, action) => {
  switch (action.type) {
    case "PROJECTS_FETCH_REQUESTED":
      return Object.assign({}, prevState, { isFetching: true });
    case "PROJECTS_FETCH_SUCCEEDED":
      return Object.assign(
        {},
        prevState,
        { isFetching: false },
        { projects: action.projects.data }
      );
    case "PROJECTS_FETCH_FAILED":
      return Object.assign(
        {},
        prevState,
        { isFetching: false },
        { error: action.error }
      );
    default:
      return prevState;
  }
};
