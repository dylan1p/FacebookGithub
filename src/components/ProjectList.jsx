import React, { Component } from 'react';

class ProjectList extends Component {

  render() {
    const {
      projects,
      selectProject
    } = this.props;

    if (!projects) {
      return <div>Loading...</div>;
    }

    projects.sort((a,b) => {
      return b.watchers - a.watchers;
    })

    return (
        <div>
        <h1>Repo list</h1>
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
  }
}

export default ProjectList;
