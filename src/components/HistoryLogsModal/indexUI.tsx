import styled from 'styled-components/native';
import colors from '../../constants/Colors';
/* Modal Container */
export const Container = styled.View`
  margin: auto;
  width: 95%;
  max-height: 420px;
  padding-bottom: 20px;
  background-color: ${colors.background};
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  overflow: hidden;
`;
/* Modal close button */
export const ModalClose = styled.TouchableHighlight`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
`;
/* Modal Title Container */
export const Title = styled.View`
  width: 100%;
  padding: 12px 0;
  background-color: ${colors.secondary};
`;
/* List Row */
export const RowContainer = styled.View`
  margin-top: 20px;
`;
