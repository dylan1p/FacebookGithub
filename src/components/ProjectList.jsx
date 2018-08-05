import React, { Component } from 'react';
import styles from '../scss/ProjectList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ProjectList extends Component {

  render() {
    const {
      projects,
      selectProject,
      containerStyles
    } = this.props;

    if (!projects) {
      return <div>Loading...</div>;
    }

    projects.sort((a,b) => {
      return b.watchers - a.watchers;
    })

    return (
      <div className={cx(styles.list, containerStyles)}>
        <h1>Repo list</h1>
        {
          projects.map((project, index) => {
            return (
              <div
                className={styles.item}
                onClick={() => selectProject(project.name)}
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
