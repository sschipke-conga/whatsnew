import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local'
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';



describe('App', () => {
  let event = { target: { name: 'health', value: 'g' } };
  const searchedStories = [{
    id: 1,
    headline: 'The Who postpones Denver Concert at the Pepsi Center',
    img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
    description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
    url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
  }];

  let wrapper;
  beforeEach(() => {
    wrapper= shallow(<App 
    
    />)
  })
  describe('default properties', () => {
    it('should have default local property', () => {
      expect(wrapper.instance().local).toEqual(local)
    });
    it('should have default health property', () => {
      expect(wrapper.instance().health).toEqual(health)
    });
    it('should have default science property', () => {
      expect(wrapper.instance().science).toEqual(science)
    });
    it('should have default entertainment property', () => {
      expect(wrapper.instance().entertainment).toEqual(entertainment)
    });
    it('should have default technology property', () => {
      expect(wrapper.instance().technology).toEqual(technology)
    });
    it('should start with it current state set to local', () => {
      expect(wrapper.state('current')).toEqual(local)
    })
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should change its current state using the event', () => {
    expect(wrapper.state('current')).toEqual(local)
    wrapper.instance().handleButton(event);
    expect(wrapper.state('current')).toEqual(health)
  });
  it('should search stories based on a string', () => {
    expect(wrapper.state('current')).toEqual(local)
    wrapper.instance().searchStories('PepSI');
    expect(wrapper.state('current')).toEqual(searchedStories);
  })
})