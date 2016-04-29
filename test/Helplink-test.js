import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HelpLink from '../src/Helplink.js';

describe("<HelpLink />", function() {
  it("is a div", function() {
    const wrapper = shallow(<HelpLink />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <button> element", function() {
    const wrapper = shallow(<HelpLink />);
    expect(wrapper.find('div').children('a').length).toBe(1);
  });

  it("contains row class", function() {
    const wrapper = shallow(<HelpLink />);
    expect(wrapper.find('.row').length).toBe(1);
  });

  it("contains mainlogin__helplink class", function() {
    const wrapper = shallow(<HelpLink />);
    expect(wrapper.find('.mainlogin__helplink').length).toBe(1);
  });

});
