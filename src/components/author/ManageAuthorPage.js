import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import toastr from 'toastr';
import {authorsWithCourseCount} from '../../selectors/selectors';

export class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false,
      deleting: false
    };

    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.author.id != newProps.author.id) {
      this.setState({ author: newProps.author });
    }
  }

  updateAuthorState(event) {
    const field = event.target.name;
    let author = this.state.author;
    author[field] = event.target.value;
    return this.setState({author: author});
  }

  saveAuthor(event) {
    event.preventDefault();
    this.setState({saving: true});
    const action = this.state.author.id ? 'updateAuthor' : 'createAuthor';
    this.props.actions[action](this.state.author).then(() => {
      this.setState({saving: false});
      this.redirect('saved');
    });
  }

  deleteAuthor(event) {
    event.preventDefault();

    if (this.state.author.courseCount > 0) {
      toastr.error('You cannot delete an author with active courses');
      return;
    }

    this.setState({deleting: true});
    this.props.actions.deleteAuthor(this.state.author).then(() => {
      this.setState({deleting: false});
      this.redirect('deleted');
    });
  }

  redirect(action) {
    this.setState({saving: false});
    toastr.success(`Author successfully ${action}!`);
    this.context.router.push('/authors');
  }

  render() {
    const {errors, author, saving, deleting} = this.state;
    return (
      <AuthorForm
        author={author}
        errors={errors}
        onChange={this.updateAuthorState}
        onSave={this.saveAuthor}
        onDelete={this.deleteAuthor}
        saving={saving}
        deleting={deleting}
      />
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const authorId = ownProps.params.id;
  let author = {id: '', firstName: '', lastName: ''};

  if (authorId && state.authors.length) {
    author = Object.assign({}, state.authors.find(a => a.id === authorId));
  }

  return {
    author: authorsWithCourseCount([author], state.courses)[0]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
