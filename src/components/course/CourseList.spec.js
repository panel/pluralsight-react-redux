import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import CourseList from './CourseList';

describe('Course List', () => {
  function setup(courses) {
    const props = {
      courses
    };

    return mount(<CourseList {...props} />);
  }

  it('diplays the courses in alphabetical order by title', () => {
    const courses = [
      {id: 1, title: 'd'},
      {id: 2, title: 'a'},
      {id: 3, title: 'c'},
      {id: 4, title: 'b'}
    ];

    const wrapper = setup(courses);
    expect(wrapper.find('.courseName').length).toEqual(4);
    expect(wrapper.find('.courseName').at(0).text()).toEqual('a');
    expect(wrapper.find('.courseName').at(1).text()).toEqual('b');
    expect(wrapper.find('.courseName').at(2).text()).toEqual('c');
    expect(wrapper.find('.courseName').at(3).text()).toEqual('d');
  });
});
