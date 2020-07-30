import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberItem from './NumberItem';
import Text from '../../Base/Text';

configure({ adapter: new Adapter() });

const number = 5;
let wrapper;
beforeEach(() => {
  wrapper = shallow(<NumberItem {...{ number }} />);
});

describe('NumberItem component', () => {
  it('Renders the number received via props (stringified)', () => {
    const title = wrapper.find(Text).text();

    expect(title).toEqual(number.toString());
  });

  it('Renders again with a different number prop and updates the number', () => {
    const newNumber = 8;
    wrapper.setProps({ number: newNumber });

    const title = wrapper.find(Text).text();

    expect(title).toEqual(newNumber.toString());
  });
});
