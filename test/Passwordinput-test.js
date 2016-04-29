import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PasswordInput from '../src/Passwordinput.js';

describe("<PasswordInput />", function() {
  it("is a div", function() {
    const wrapper = shallow(<PasswordInput />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <input> element", function() {
    const wrapper = shallow(<PasswordInput />);
    expect(wrapper.find('div').children('input').length).toBe(1);
  });

  it("contains row class", function() {
    const wrapper = shallow(<PasswordInput />);
    expect(wrapper.find('.row').length).toBe(1);
  });

  it("contains mainlogin class", function() {
    const wrapper = shallow(<PasswordInput />);
    expect(wrapper.find('div').children('input').find('.mainlogin').length).toBe(1);
  });

  it("contains mainlogin__PasswordInput class", function() {
    const wrapper = shallow(<PasswordInput />);
    expect(wrapper.find('div').children('input').find('.mainlogin__passwdinput').length).toBe(1);
  });

  it("contains mainlogin__PasswordInput class", function() {
    const wrapper = shallow(<PasswordInput />);
    expect(wrapper.find('div').children('input').find('.main--center').length).toBe(1);
  });

});
