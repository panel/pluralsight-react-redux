import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header', () => {
  function setup({loading, courseCount, authorCount} = {}) {
    const props = {
      loading,
      courseCount,
      authorCount
    };
    return shallow(<Header {...props} />);
  }

  it('displays the count of courses', () => {
    const header = setup({courseCount: 2});

    expect(header.find('#course-count').text()).toEqual('(2)');
  });

  it('displays the count of authors', () => {
    const header = setup({authorCount: 5});
    expect(header.find('#author-count').text()).toEqual('(5)');
  });
});
