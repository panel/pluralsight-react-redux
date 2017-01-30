import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {AuthorsPage} from './AuthorsPage';

describe('Authors Page', () => {
  function setup(authors = []) {
    const props = { authors };

    return mount(<AuthorsPage authors={authors} />);
  }

  it('displays a title', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('Authors');
  });

  it('displays a table of authors if any authors exist', () => {
    const wrapper = setup([{id: 1, firstName: 'Paul', lastName: 'Nelson'}]);
    expect(wrapper.find('#authorTable').get(0)).toNotBe();
  });

  it('hides the table of authors if no authors exist', () => {
    const wrapper = setup();
    expect(wrapper.find('#authorTable').get(0)).toBe();
  });
});
