import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer'

describe('NewsArticle', () => {
  let stories = [{ img: '//www.pic.com', headline: 'EXTRA EXTRA', description: 'Read all about it' }, { img: '//www.pictures.com', headline: 'Fake news', description: 'don\'t read it'}]
  it('should match a snap shot', () => {
    const wrapper = shallow(<NewsContainer
      articles={stories}
    />)
    expect(wrapper).toMatchSnapshot();
  })
});