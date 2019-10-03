import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let event = { target: { name: 'search', value: 'test value' } };
  const mockSearchStories= jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper= shallow(<SearchForm 
    searchStories={mockSearchStories}
    />)
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should run searchStories on click of button', () => {
    wrapper.find('button').simulate('click');
    expect(mockSearchStories).toHaveBeenCalled()
  });
  it('should update the state based on the input', () => {
    wrapper.instance().handleChange(event);
    expect(wrapper.state('search')).toEqual('test value')
  });
  it('on handleSubmit it should reset state when button is clicked', () => {
    wrapper.instance().setState({search:'giant babies'});
    expect(wrapper.state('search')).toEqual('giant babies');
    wrapper.find('button').simulate('click')
    expect(wrapper.state('search')).toEqual('')
    expect(mockSearchStories).toHaveBeenCalled()
  })
})