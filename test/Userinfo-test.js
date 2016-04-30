import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserInfo from '../src/Userinfo.js';

describe("<UserInfo />", function() {
  var users = [{
      "id": 1,
      "firstName": "Jeffery",
      "lastName": "Aramini",
      "email": "jeff_aramini@ihealthsolutions.net",
      "password": "12345678",
      "pic": "imgs/jeff-pic.png",
      "icon": "imgs/nav/jeff-copy.png"
  }, {
      "id": 2,
      "firstName": "Rui",
      "lastName": "Geng",
      "email": "gengr.r@gmail.com",
      "password": "12345678",
      "pic": "imgs/rui.png",
      "icon": "imgs/nav/rui-copy.png"
  }];

  it("is a div", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains a <img> element", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('img').length).toBe(1);
  });

  it("contains two <p> element", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('p').length).toBe(2);
  });

  it("<div> element contains row class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('div').find('.row').length).toBe(1);
  });

  it("<div> element contains main class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('div').find('.main').length).toBe(1);
  });

  it("<div> element contains userinfo class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('div').find('.userinfo').length).toBe(1);
  });

  it("<div> element contains userinfo--font class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('div').find('.userinfo--font').length).toBe(1);
  });

  it("<img> element contains userinfo_logo class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('img').find('.userinfo_logo').length).toBe(1);
  });

  it("<img> element contains main--center class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('img').find('.main--center').length).toBe(1);
  });

  it("<p> element contains userinfor__name class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('p').find('.userinfor__name').length).toBe(1);
  });

  it("<p> element contains userinfor__email class", function() {
    const wrapper = shallow(<UserInfo user={users} />);
    expect(wrapper.find('p').find('.userinfor__email').length).toBe(1);
  });

});
