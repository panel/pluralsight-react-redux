import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {CoursesPage} from './CoursesPage';

describe('Courses Page', () => {
  function setup(courses) {
    const props = {
      courses
    };

    return mount(<CoursesPage {...props} />);
  }

  it('shows a list of courses if there are courses', () => {
    const courses = [
      {id: 1},
      {id: 2},
      {id: 3}
    ];

    const wrapper = setup(courses);
    expect(wrapper.find('tr').length).toEqual(courses.length + 1);
  });

  it('hides the table when there are not courses', () => {
    const wrapper = setup([]);
    expect(wrapper.find('table').length).toEqual(0);
  });
});
