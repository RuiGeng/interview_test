import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from '../src/Footer';

describe("<Footer />", function() {

  it("is a footer", function() {
    const wrapper = shallow(<Footer />);
    expect(wrapper.is('footer')).toBe(true);
  });

  it("contains a <p> html", function() {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').length).toBe(1);
  });

  it("ccontains footer class", function() {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.footer').length).toBe(1);
  });

  it("ccontains footer--center class", function() {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.footer--center').length).toBe(1);
  });

  it("ccontains footer--font class", function() {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.footer--font').length).toBe(1);
  });

  it("contains a specific html paragraph", function() {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains(<p className = "footer__copyright">&copy; Scientific Technologies Corporation 2016</p>)).toBe(true);
  });
});
