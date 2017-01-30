import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {foo: 'bar'};
      const action = courseActions.createCourseSuccess(course);

      expect(action.type).toEqual(types.CREATE_COURSE_SUCCESS);
      expect(action.course).toEqual(course);
    });
  });

  describe('deleteCourseSuccess', () => {
    const course = {foo: 'bar'};
    const action = courseActions.deleteCourseSuccess(course);

    expect(action.type).toEqual(types.DELETE_COURSE_SUCCESS);
    expect(action.course).toEqual(course);
  });
});

const mockStore = configureMockStore([thunk]);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Load Courses', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
      // sample
      // nock('http://example.com')
      //   .get('courses')
      //   .reply(200, { body: course: [{ id: 1, firstName: 'Cory', lastName: 'House'}]});
      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.DELETE_COURSE_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
      ];

      const store = mockStore({ courses: [] }, expectedActions);
      store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });
    });
  });

  describe('Delete Course', () => {
    it('should create BEGIN_AJAX_CALL and DELETE_COURSE_SUCCESS when loading courses', (done) => {
      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
      ];
      const course = {id: 'clean-code', title: 'Clean Code'};
      const store = mockStore({ courses: [course] }, expectedActions);
      store.dispatch(courseActions.deleteCourse(course)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.DELETE_COURSE_SUCCESS);
        expect(actions[1].course).toEqual(course);
        done();
      });
    });
  });
});
