import React, { Component } from "react";

class ProjectList extends Component {

  render() {
    const {
      projects,
      selectProject
    } = this.props;

    if (projects) {
      return (
        <div>
          {
            projects.map((project, index) => {
              return (
                <div onClick={() => selectProject(project.name)}
                  key={index}>
                  { project.name }
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default ProjectList;
