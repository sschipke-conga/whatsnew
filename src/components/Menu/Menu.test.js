import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu'

describe('Menu', () => {
  const mockHandleButton = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Menu 
      handleButton={mockHandleButton}
      />)
  });
  it('should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  });
  it('should run handleButton function when the first button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockHandleButton).toHaveBeenCalled();
  });
  it('should run handleButton function when the second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockHandleButton).toHaveBeenCalled();
  });
  it('should run handleButton function when the third button is clicked', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(mockHandleButton).toHaveBeenCalled();
  });
  it('should run handleButton function when the fourth button is clicked', () => {
    wrapper.find('button').at(3).simulate('click');
    expect(mockHandleButton).toHaveBeenCalled();
  });
  it('should run handleButton function when the fifth button is clicked', () => {
    wrapper.find('button').at(4).simulate('click');
    expect(mockHandleButton).toHaveBeenCalled();
  })
})