import React from 'react';
import styled from 'styled-components/native';
import NumberItem from './NumberItem';

const NumbersContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

// The default values in the boxes before any number is generated
const defaultValues = ['x', 'x', 'x'];

interface FProps {
  numbersList: numbers[],
  createdTime: number,
  itemSize: string,
  fontSize: string
}
/**
 * Presents a list of boxes from given array
 * @numbersList - {array}: The data to be presented in boxes
 * @createdTime - {number}: The timestamp, serves only part-key purposes here
 * @itemSize - {string}: The dimension size of the box
 * @fontSize - {string}: The size of the text
 */
const NumbersRow: React.FC<FProps> = ({
  numbersList,
  createdTime,
  itemSize,
  fontSize
}) => {
  const listItems = (numbersList && numbersList.length)
    ? numbersList : defaultValues;
  return (
    <NumbersContainer>
      {listItems.map((number, index) => (
        <NumberItem
          /* eslint-disable-next-line react/no-array-index-key */
          key={`item-${index}-${createdTime}`}
          {...{ number, itemSize, fontSize }}
        />
      ))}
    </NumbersContainer>
  );
};

export default React.memo(NumbersRow);
