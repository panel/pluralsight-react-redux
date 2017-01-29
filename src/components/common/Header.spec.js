import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header', () => {
  function setup({loading, courseCount} = {}) {
    const props = {
      loading: loading,
      courseCount: courseCount
    };
    return shallow(<Header {...props} />);
  }

  it('displays the count of courses', () => {
    const header = setup({courseCount: 2});

    expect(header.find('#course-count').text()).toEqual('(2)');
  });
});
