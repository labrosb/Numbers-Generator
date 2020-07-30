import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../../constants/Colors';
import Text from '../../Base/Text';

/** Linear Gradient Container Component */
const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  width: ${({ dimSize }) => (dimSize || '100px')};
  height: ${({ dimSize }) => (dimSize || '100px')};
  border: 0.5px solid ${colors.fade};
  border-radius: 4px;
`;

interface FProps { number: number, itemSize: string, fontSize: string }
/**
 * Presents a number in a box
 * @number - {number}: The number to be presented
 * @itemSize - {string}: The dimension size of the box
 * @fontSize - {string}: The size of the text
 */
const NumberGenerator: React.FC<FProps> = ({ number, itemSize, fontSize }) => (
  <Container
    dimSize={itemSize}
    colors={[colors.secondaryTint, colors.secondary]}
    start={[0, 0]}
    end={[1, 1]}
  >
    <Text size={fontSize || '26px'}>
      {`${number}`}
    </Text>
  </Container>
);

export default NumberGenerator;
