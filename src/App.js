import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CalculadoraScreen from './views/CalculadoraScreen';

import { styles } from './theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar 
        backgroundColor='black'
        barStyle="light-content"
      />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
