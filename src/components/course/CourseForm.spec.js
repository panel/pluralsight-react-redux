import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup({saving, deleting} = {}) {
  const props = {
    course: {},
    loading: saving,
    deleting,
    errors: {},
    onSave: () => {},
    onChange: () => {},
    onDelete: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course Delete');
  });

  describe('save button', () => {
    it('is labeled "Save" when not saving', () => {
        const wrapper = setup();
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('is labeled "Saving..." when saving', () => {
        const wrapper = setup({saving: true});
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });

    it('is disabled when loading', () => {
      const wrapper = setup({saving: true});
      expect(wrapper.find('input').props().disable).toBe(true);
    });
  });

  describe('delete button', () => {
    it('is labeled "Delete" when not deleting', () => {
      const wrapper = setup({saving: false, deleting: false});
      expect(wrapper.find('#delete-button').text()).toBe('Delete');
    });

    it('is labeled "Deleting..." while deleting', () => {
      const wrapper = setup({saving: false, deleting: true});
      expect(wrapper.find('#delete-button').text()).toBe('Deleting...');
    });

    it('is disabled when loading', () => {
      const wrapper = setup({saving: true});
      expect(wrapper.find('#delete-button').props().disable).toBe(true);
    });

    it('is disabled when deleting', () => {
      const wrapper = setup({deleting: true});
      expect(wrapper.find('#delete-button').props().disable).toBe(true);
    });
  });


});
