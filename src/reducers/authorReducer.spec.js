import expect from 'expect';
import authorReducer from './authorReducer';
import * as actions from '../actions/authorActions';

describe('Author reducer', () => {
  it('sets the state to the loaded authors on LOAD_AUTHORS_SUCCESS', () => {
    const initialState = [];
    const authors = [1, 2, 4];
    const action = actions.loadAuthorsSuccess(authors);

    const newState = authorReducer(initialState, action);
    expect(newState).toEqual(authors);
  });

  it('appends the a new author on CREATE_AUTHOR_SUCCESS', () => {
    const initialState = [ {id: 1} ];
    const author = { id: 2 };
    const action = actions.createAuthorSuccess(author);

    const newState = authorReducer(initialState, action);
    expect(newState[0]).toEqual(initialState[0]);
    expect(newState[1]).toEqual(author);
  });

  it('replaces the changed author on UPDATE_AUTHOR_SUCCESS', () => {
    const initialState = [ {id: 1}, {id: 2} ];
    const author = { id: 2, name: 'test' };
    const action = actions.updateAuthorSuccess(author);

    const newState = authorReducer(initialState, action);
    expect(newState[0]).toEqual(initialState[0]);
    expect(newState[1]).toEqual(author);
  });

  it('removes the specifed author on DELETE_AUTHOR_SUCCESS', () => {
    const initialState = [ {id: 1}, {id: 2} ];
    const author = { id: 1 };
    const action = actions.deleteAuthorSuccess(author);

    const newState = authorReducer(initialState, action);
    expect(newState[0]).toEqual(initialState[1]);
    expect(newState[1]).toBe();
  });
});
