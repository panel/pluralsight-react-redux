import AuthorApi from '../api/mockAuthor';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function deleteAuthorSuccess(author) {
  return {type: types.DELETE_AUTHOR_SUCCESS, author};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createAuthor(author) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(author => {
      dispatch(createAuthorSuccess(author));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateAuthor(author) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(author => {
      dispatch(updateAuthorSuccess(author));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteAuthor(author) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.deleteAuthor().then(() => {
      dispatch(deleteAuthorSuccess(author));
    }).catch(error => {
      throw(error);
    });
  };
}
