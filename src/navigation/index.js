import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
