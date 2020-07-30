import styled from 'styled-components/native';
import colors from '../../constants/Colors';
import layout from '../../constants/Layout';

const Text = styled.Text`
  font-family: ${({ family }) => (family || layout.defaultFont)};
  font-size: ${({ size }) => (size || '14px')};
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color }) => (color || colors.text)};
`;

export default Text;
