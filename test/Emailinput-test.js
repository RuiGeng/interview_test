import React from 'react';
import { shallow, mount, render } from 'enzyme';
import EmailInput from '../src/Emailinput.js';

describe("<EmailInput />", function() {
  it("is a div", function() {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <input> element", function() {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('div').children('input').length).toBe(1);
  });

  it("contains row class", function() {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('.row').length).toBe(1);
  });

  it("contains mainlogin class", function() {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('div').children('input').find('.mainlogin').length).toBe(1);
  });

  it("contains mainlogin__emailinput class", function() {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('div').children('input').find('.mainlogin__emailinput').length).toBe(1);
  });

  it("contains mainlogin__emailinput class", function() {
    const wrapper = shallow(<EmailInput />);
    expect(wrapper.find('div').children('input').find('.main--center').length).toBe(1);
  });

});
