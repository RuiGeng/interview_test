import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ApplicationListItem from '../src/ApplicationListItem.js';

describe("<ApplicationListItem />", function() {
  var img = [{
      "id": 1,
      "src": "imgs/app/iweb.png"
  }];

  it("is a div", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <a> element", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.find('div').children('a').length).toBe(1);
  });

  it("contains a <img> element", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.find('div').children('a').children('img').length).toBe(1);
  });

  it("contains col-lg-4 class", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.find('.col-lg-4').length).toBe(1);
  });

  it("contains col-md-4 class", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.find('.col-md-4').length).toBe(1);
  });

  it("contains col-sm-4 class", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.find('.col-sm-4').length).toBe(1);
  });

  it("contains col-xs-6 class", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.find('.col-xs-6').length).toBe(1);
  });

  it("contains application__item class", function() {
    const wrapper = shallow(<ApplicationListItem application={img} />);
    expect(wrapper.find('.application__item').length).toBe(1);
  });

  it("contains application_logo class", function() {
    const wrapper = mount(
      <ApplicationListItem application={img} />
    );
    expect(wrapper.find('img').find('.application_logo').length).toBe(1);
  });
});
