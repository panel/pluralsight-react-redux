import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      {title: 'a'},
      {title: 'b'}
    ];

    const newCourse = {title: 'c'};

    const action = actions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('a');
    expect(newState[1].title).toEqual('b');
    expect(newState[2].title).toEqual('c');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 1, title: 'a'},
      {id: 2, title: 'b'},
      {id: 3, title: 'c'}
    ];

    const course = {id: 2, title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id === course.id);
    const pristineCourse = newState.find(a => a.id === 1);

    expect(updatedCourse.title).toEqual(course.title);
    expect(pristineCourse.title).toEqual('a');
    expect(newState.length).toEqual(initialState.length);
  });
});
