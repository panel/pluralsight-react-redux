import React, { PropTypes } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
          courseCount={this.props.courseCount}
          authorCount={this.props.authorCount}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  courseCount: PropTypes.number.isRequired,
  authorCount: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    courseCount: state.courses.length,
    authorCount: state.authors.length
  };
}

export default connect(mapStateToProps)(App);
