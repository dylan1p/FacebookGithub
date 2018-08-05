import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    if(this.props.projects) {
      return(
          <div>
          {
            this.props.projects.map((project, index) => {
              return(<div key={index}>{project.name}</div>)
            })
          }
        </div>
      );
    } else {
        return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
