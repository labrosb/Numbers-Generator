/**
 * @jest-environment jsdom
 */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from '../../Base/Text';
import NumberItem from './NumberItem';
import NumbersRow from '.';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = mount(<NumbersRow />);
});

describe('NumbersRow component', () => {
  it('Renders NumbersRow with without props if it renders the alt (X) content', () => {
    const title = wrapper.find(Text).first().text();

    expect(title).toEqual('x');
  });

  it('Checks if the items are rendered', () => {
    const numbersList = [1, 2, 4];
    wrapper.setProps({ numbersList });
    const title = wrapper.find(NumberItem).length;

    expect(title).toEqual(numbersList.length);
  });
});
