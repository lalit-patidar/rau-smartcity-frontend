import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from './src/navigations/nonAuth/nonAuthStackNav';

const App = () => {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
