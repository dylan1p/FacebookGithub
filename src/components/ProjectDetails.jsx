import React from "react";

const ProjectDetails = ({projectDetails}) => {
  if(projectDetails) {
    return (
      <div>
        <h1>{projectDetails.details.name}</h1>
        <div>
          {
            projectDetails.contributors.map((contributor, index) => {
              return <div key={index}>{contributor.login}</div>
            })
          }
        </div>
      </div>

    )
  } else {
    return <div>Please select a project to view details of...</div>
  }
}

export default ProjectDetails;
