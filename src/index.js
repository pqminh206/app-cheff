import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import AppNavContainer from 'navigation/';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#333333" />
      <AppNavContainer />
    </>
  );
};

export default App;
