import { StatusBar, Dimensions } from 'react-native';

/** Layout configuration variables */

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default {
  defaultFont: 'OpenSans',
  secondaryFont: 'system-ui',
  screenWidth: width,
  screenHeight: height,
  statusBarHeight: StatusBar.currentHeight || 0
};
