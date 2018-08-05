import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import styles from '../scss/App.scss';

class App extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  selectProject(projectName) {
    this.props.getProject(projectName);
  }

  render() {
    const {
      projects,
      projectDetails
    } = this.props;

    return (
      <div className={styles.app}>
        <ProjectList containerStyles={styles.projectList}
                     projects={projects}
                     selectProject={this.selectProject.bind(this)}/>

        <ProjectDetails containerStyles={styles.projectDetails}
                        projectDetails={projectDetails}/>
      </div>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
