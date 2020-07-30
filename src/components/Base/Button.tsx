import React from 'react';
import styled from 'styled-components/native';
import colors from '../../constants/Colors';
import layout from '../../constants/Layout';

export const ButtonComponent = styled.TouchableOpacity`
  justify-content: center;
  min-height: 38px;
  width: ${({ width }) => (width || 'auto')};
  height: ${({ height }) => (height || 'auto')};
  padding: 0 16px;
  background-color: ${({ color }) => color || colors.primary};
  border-radius: ${({ square }) => (square ? 0 : '24px')};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
  elevation: 1.5;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${({ fontFamily }) => fontFamily || layout.defaultFont};
  font-size: ${({ titlesize }) => titlesize || '14.5px'};
  color: ${({ textcolor }) => textcolor || colors.secondary};
  margin: 0 4px
`;

interface FProps {
  height: string,
  width: string,
  color: string,
  square: string,
  title: string,
  titlesize: string,
  textcolor: string,
  fontFamily: string,
  onPress: () => void
}

const Button: React.FC<FProps> = ({
  height,
  width,
  color,
  square,
  title,
  titlesize,
  textcolor,
  fontFamily,
  onPress
}) => (
  <ButtonComponent {...{ height, width, color, square, onPress }}>
    <Content>
      <Label {...{ titlesize, fontFamily, textcolor }}>
        { title }
      </Label>
    </Content>
  </ButtonComponent>
);

export default Button;
