import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local'
import health from '../../data/health'



describe('App', () => {
  let event = { target: { name: 'health', value: 'g' } };

  let wrapper;
  beforeEach(() => {
    wrapper= shallow(<App 
    
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should change its current state using the event', () => {
    expect(wrapper.state('current')).toEqual(local)
    wrapper.instance().handleButton(event);
    expect(wrapper.state('current')).toEqual(health)
  });
  it('should search stories based on a string', () => {
    let searchTerm = 'giant';

  })
})