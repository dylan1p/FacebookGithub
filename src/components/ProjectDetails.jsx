import React from 'react';
import styles from '../scss/ProjectDetails.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProjectDetails = ({projectDetails, containerStyles }) => {

  if(!projectDetails) {
    return <div className={styles.noContent}>Please select a project to view details of...</div>
  }

  return (
    <div className={cx(containerStyles, styles.details)}>
      <h1>{projectDetails.details.name}</h1>

      <div className={styles.description}>{projectDetails.details.description}</div>

      <div className={styles.contributorHeader}>Contributors</div>
      <div className={styles.contributorContainer}>
        {
          projectDetails.contributors.map((contributor, index) => {
            return (
              <div key={index} className={styles.contributor}>
                <img src={contributor.avatar_url}></img>
                {contributor.login}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectDetails;
