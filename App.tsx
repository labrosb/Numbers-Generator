import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { store } from './src/state/store';
import NumbersGeneratorScreen from './src/screens/NumbersScreen';
import OpenSans from './assets/fonts/openSans/OpenSans-Regular.ttf';

/**
 * - The App is built using expo for easier testing in different devices
 * in a real production case the app would either be built using the native
 * solution or ejected from expo, with additional android / ios configurations
 *
 * - Numbers Generator is a single page mobile application
 * The current app has no need for multiple roots infrastructure. However
 * the project architecture / infrastructure is designed keeping in mind
 * scalability and extensibility.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const App: React.FC<void> = () => {
  // Hook for async fonts loading
  const [fontsLoaded] = useFonts({ OpenSans });
  // When fonts are loaded, render app
  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NumbersGeneratorScreen />
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style="auto" />
        </View>
      </Provider>
    );
  }
  return null;
};

export default App;
