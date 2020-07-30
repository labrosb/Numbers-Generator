import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import Layout from '../constants/Layout';
import { getRandomInt } from '../utilities/general';
import Text from './Base/Text';
import Button from './Base/Button';
import NumberRow from './Common/NumbersRow';

const { screenHeight } = Layout;

const Container = styled.View`
  flex: 1;
  margin-top: ${screenHeight * 0.15}px;
`;
const RowContainer = styled.View`
  margin-top: ${screenHeight * 0.05}px;
`;
/* Numbers generate button */
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${screenHeight * 0.09}px;
`;

/** Function returns an array of 3 random numbers (0-9) */
const generateNumbers = (): number[] => ([
  getRandomInt(9),
  getRandomInt(9),
  getRandomInt(9)
]);

interface FProps {
  createdTime: number
  numbersList: number[],
  setGeneratedNumbers: (numbers: number[]) => void
}
/**
 * Generates and presents random digits into boxes
 * @createdTime - {number}: The timestamp of the created numbers
 * @numbersList - {Array}: The list of the created numbers
 * @setGeneratedNumbers - {redux func}: To save numbers to state
 */
const NumbersGenerator: React.FC<FProps> = ({
  createdTime,
  numbersList,
  setGeneratedNumbers
}) => {
  /** Generates and presents a list of numbers */
  const setNumbers = useCallback(() => {
    // Numbers generation function
    const numbers = generateNumbers();
    // Save to state
    setGeneratedNumbers(numbers);
  }, [setGeneratedNumbers]);

  return (
    <Container>
      <Text size="14px" align="center">
        Click Generate to create numbers
      </Text>
      <RowContainer>
        <NumberRow {...{ createdTime, numbersList }} />
      </RowContainer>
      <ButtonContainer>
        <Button
          title="Generate"
          onPress={setNumbers}
        />
      </ButtonContainer>
    </Container>
  );
};

export default React.memo(NumbersGenerator);
