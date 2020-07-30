import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import Layout from '../constants/Layout';
import colors from '../constants/Colors';
import Text from './Base/Text';

export const Container = styled(LinearGradient)`
  height: 110px;
  padding-top: ${Layout.statusBarHeight}px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
  elevation: 1.6;
`;

/** Presents the App Header */
const Header: React.FC<void> = () => (
  <Container
    colors={[colors.primary, colors.primaryTint]}
    start={[0, 1]}
    end={[1, 0]}
  >
    <Text size="18px" color={colors.secondary}>
      Numbers Generator
    </Text>
  </Container>
);

export default Header;
