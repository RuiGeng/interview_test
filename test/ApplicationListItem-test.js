import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ApplicationListItem from '../src/ApplicationListItem.js';

describe("<ApplicationListItem />", function() {
  it("is a div", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <input> element", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.find('div').children('a').length).toBe(1);
  });

  it("contains a <img> element", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.find('div').children('a').children('img').length).toBe(1);
  });

  it("contains col-lg-4 class", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.find('.col-lg-4').length).toBe(1);
  });

  it("contains col-md-4 class", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.find('.col-md-4').length).toBe(1);
  });

  it("contains col-sm-4 class", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.find('.col-sm-4').length).toBe(1);
  });

  it("contains col-xs-6 class", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.find('.col-xs-6').length).toBe(1);
  });

  it("contains application__item class", function() {
    const wrapper = shallow(<ApplicationListItem />);
    expect(wrapper.find('.application__item').length).toBe(1);
  });

  it("contains application_logo class", function() {
    const wrapper = mount(<ApplicationListItem src="imgs/app/iweb.png" />);
    expect(wrapper.props().src).toEqual("imgs/app/iweb.png");
    //wrapper.setProps({application: this.data});
    expect(wrapper.find('img').find('.application_logo').length).toBe(1);
  });

});
