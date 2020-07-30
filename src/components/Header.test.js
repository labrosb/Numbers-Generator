import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Header from './Header';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('Header component', () => {
  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
