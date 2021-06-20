import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';

const StackMain = createStackNavigator();
const MainNavigator = () => {
  return (
    <StackMain.Navigator initialRouteName="Tabs">
      <StackMain.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </StackMain.Navigator>
  );
};

export default MainNavigator;
