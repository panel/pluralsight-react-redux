import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import AuthorList from './AuthorList';
import {authorsWithCourseCount} from '../../selectors/selectors';

export class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  render() {
    const {authors} = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <input type="submit"
               value="Add Author"
               className="btn btn-primary"
             onClick={this.redirectToAddAuthorPage}/>
        {!!authors.length && <AuthorList authors={authors} />}
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: authorsWithCourseCount(state.authors, state.courses)
  };
}

export default connect(mapStateToProps)(AuthorsPage);
