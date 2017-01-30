import expect from 'expect';
import * as authorActions from './authorActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('Author actions', () => {
  describe('load authors success', () => {
    it('creates a LOAD_AUTHORS_SUCCESS action', () => {
      const authors = [{
        id: 1
      }];

      const action = authorActions.loadAuthorsSuccess(authors);

      expect(action.type).toEqual(types.LOAD_AUTHORS_SUCCESS);
      expect(action.authors).toEqual(authors);
    });
  });

  describe('create author success', () => {
    it('creates a CREATE_AUTHOR_SUCCESS action', () => {
      const author = {
        id: 1
      };

      const action = authorActions.createAuthorSuccess(author);

      expect(action.type).toEqual(types.CREATE_AUTHOR_SUCCESS);
      expect(action.author).toEqual(author);
    });
  });

  describe('update author success', () => {
    it('creates a UPDATE_AUTHOR_SUCCESS action', () => {
      const author = {
        id: 1
      };

      const action = authorActions.updateAuthorSuccess(author);

      expect(action.type).toEqual(types.UPDATE_AUTHOR_SUCCESS);
      expect(action.author).toEqual(author);
    });
  });

  describe('delete author success', () => {
    it('creates a DELETE_AUTHOR_SUCCESS action', () => {
      const author = {
        id: 1
      };

      const action = authorActions.deleteAuthorSuccess(author);

      expect(action.type).toEqual(types.DELETE_AUTHOR_SUCCESS);
      expect(action.author).toEqual(author);
    });
  });
});

describe('Async Author actions', () => {
  const mockStore = configureMockStore([thunk]);

  describe('load authors', () => {
    it('dispatches BEGIN_AJAX_CALL and LOAD_AUTHORS_SUCCESS', (done) => {
      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_AUTHORS_SUCCESS}
      ];

      const store = mockStore({ authors: [] }, expectedActions);
      store.dispatch(authorActions.loadAuthors()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1].type).toEqual(expectedActions[1].type);
        done();
      });
    });
  });

  describe('create author', () => {
    it('dispatches BEGIN_AJAX_CALL and CREATE_AUTHOR_SUCCESS', (done) => {
      const author = {firstName: 'Paul', lastName: 'Nelson'};
      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.CREATE_AUTHOR_SUCCESS, author: author}
      ];

      const store = mockStore({ authors: [] }, expectedActions);
      store.dispatch(authorActions.createAuthor(author)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1]).toEqual(expectedActions[1]);
        done();
      });
    });
  });

  describe('update author', () => {
    it('dispatches BEGIN_AJAX_CALL and UPDATE_AUTHOR_SUCCESS', (done) => {
      const author = {id: 1, firstName: 'Paul', lastName: 'Nelson'};
      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.UPDATE_AUTHOR_SUCCESS, author: author}
      ];

      const store = mockStore({ authors: [] }, expectedActions);
      store.dispatch(authorActions.updateAuthor(author)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1]).toEqual(expectedActions[1]);
        done();
      });
    });
  });

  describe('delete author', () => {
    it('dispatches BEGIN_AJAX_CALL and DELETE_AUTHOR_SUCCESS', (done) => {
      const author = {id: 1, firstName: 'Paul', lastName: 'Nelson'};
      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.DELETE_AUTHOR_SUCCESS, author: author}
      ];

      const store = mockStore({ authors: [] }, expectedActions);
      store.dispatch(authorActions.deleteAuthor(author)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[1]).toEqual(expectedActions[1]);
        done();
      });
    });
  });
});
