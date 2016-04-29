import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ApplicationListItem from '../src/ApplicationListItem.js';
import ApplicationList from '../src/ApplicationList.js';

describe("<ApplicationList />", function() {
  var imgs = [{
      "id": 1,
      "src": "imgs/app/iweb.png"
  }, {
      "id": 2,
      "src": "imgs/app/phchub.png"
  }, {
      "id": 3,
      "src": "imgs/app/immucast.png"
  }, {
      "id": 4,
      "src": "imgs/app/sentinel.png"
  }, {
      "id": 5,
      "src": "imgs/app/smart.png"
  }, {
      "id": 6,
      "src": "imgs/app/immslink.png"
  }, {
      "id": 7,
      "src": "imgs/app/myir_tm.png"
  }, {
      "id": 8,
      "src": "imgs/app/oms.png"
  }, {
      "id": 9,
      "src": "imgs/app/voms_web.png"
  }];

  it("is a div", function() {
    const wrapper = shallow( <ApplicationList applications= {imgs}  />);
    expect(wrapper.is('div')).toBe(true);
  });

  it("contains 2 <div> element", function() {
    const wrapper = shallow(<ApplicationList applications={imgs} />);
    expect(wrapper.find('div').length).toBe(2);
  });

  it("contains applications class", function() {
    const wrapper = shallow(<ApplicationList applications={imgs} />);
    expect(wrapper.find('.applications').length).toBe(1);
  });

  it("contains container class", function() {
    const wrapper = shallow(<ApplicationList applications={imgs} />);
    expect(wrapper.find('.container').length).toBe(1);
  });

  it("contains row class", function() {
    const wrapper = shallow(<ApplicationList applications={imgs} />);
    expect(wrapper.find('div').children('div').find('.row').length).toBe(1);
  });

  it("contains nine <a> html element", function() {
    const wrapper = render(<ApplicationList applications={imgs} />);
    expect(wrapper.find('a').length).toBe(9);
  });

  it("contains nine <img> html element", function() {
    const wrapper = render(<ApplicationList applications={imgs} />);
    expect(wrapper.find('a').children('img').length).toBe(9);
  });
});
