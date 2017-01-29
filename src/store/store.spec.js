import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating courses', () => {
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    const actual = store.getState().courses[0];

    expect(actual).toEqual(course);
  });

  it('should handle deleting courses', () => {
    const course = {id: 1};
    const store = createStore(rootReducer, Object.assign({}, initialState, {courses: [course]}));

    const action = courseActions.deleteCourseSuccess(course);
    store.dispatch(action);

    const newState = store.getState();

    expect(newState.courses.length).toBe(0);
  });
});
