export function getProjects() {
  return { type: "PROJECTS_FETCH_REQUESTED" };
}

export function getProject(projectName) {
  return { type: "PROJECT_FETCH_REQUESTED", projectName };
}
