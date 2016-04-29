import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HeaderLogo from '../src/Headerlogo.js';

describe("<HeaderLogo />", function() {
  it("is a div", function() {
    const wrapper = shallow(<HeaderLogo />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <img> html", function() {
    const wrapper = shallow(<HeaderLogo />);
    expect(wrapper.find('div').children('img').length).toBe(1);
  });

  it("contains title class", function() {
    const wrapper = shallow(<HeaderLogo />);
    expect(wrapper.find('.title').length).toBe(1);
  });

  it("contains title__logo class", function() {
    const wrapper = shallow(<HeaderLogo />);
    expect(wrapper.find('div').children('img').find('.title__logo').length).toBe(1);
  });

  it("contains title--center class", function() {
    const wrapper = shallow(<HeaderLogo />);
    expect(wrapper.find('div').children('img').find('.title--center').length).toBe(1);
  });
});
