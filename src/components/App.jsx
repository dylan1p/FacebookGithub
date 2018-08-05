import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

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
      <div>
        <ProjectList projects={projects} selectProject={this.selectProject.bind(this)}/>
        <ProjectDetails projectDetails={projectDetails}></ProjectDetails>
      </div>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
