import React from 'react';
import { shallow, mount, render } from 'enzyme';
import EnterButton from '../src/Enterbutton.js';

describe("<EnterButton />", function() {
  it("is a div", function() {
    const wrapper = shallow(<EnterButton />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <button> element", function() {
    const wrapper = shallow(<EnterButton />);
    expect(wrapper.find('div').children('button').length).toBe(1);
  });

  it("contains row class", function() {
    const wrapper = shallow(<EnterButton />);
    expect(wrapper.find('.row').length).toBe(1);
  });

  it("contains mainlogin class", function() {
    const wrapper = shallow(<EnterButton />);
    expect(wrapper.find('div').children('button').find('.mainlogin').length).toBe(1);
  });

  it("contains mainlogin__EnterButton class", function() {
    const wrapper = shallow(<EnterButton />);
    expect(wrapper.find('div').children('button').find('.mainlogin__nextbtn').length).toBe(1);
  });

  it("contains mainlogin__EnterButton class", function() {
    const wrapper = shallow(<EnterButton />);
    expect(wrapper.find('div').children('button').find('.main--center').length).toBe(1);
  });

});
