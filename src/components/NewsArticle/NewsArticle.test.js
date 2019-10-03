import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle'

describe('NewsArticle', () => {
  let story = {img:'//www.pic.com', headline: 'EXTRA EXTRA', description:'Read all about it'}
  it('should match a snap shot', () => {
    const wrapper = shallow(<NewsArticle 
    story={story}
    />)
    expect(wrapper).toMatchSnapshot();
  })
});