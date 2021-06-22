import React, {useRef} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from 'features/HomeScreen';
import HeartScreen from 'features/HeartScreen';
import SearchScreen from 'features/SearchScreen';
import SettingScreen from 'features/SettingScreen';

import colors from 'config/colors';
import {CheffIcon, HeartIcon, SearchIcon, TwoBarIcon} from 'assets/images/svg';
import {styles} from './styles';

const Tab = createBottomTabNavigator();

const getWidthIconBottomBar = () => {
  const {width} = Dimensions.get('window');
  return width / 4;
};

const BottomTabNavigator = () => {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  const listTabScreenBottom = [
    {
      id: 'Home',
      tabName: 'Home',
      component: HomeScreen,
      icon: <CheffIcon />,
      valueAnimation: 0,
    },
    {
      id: 'Heart',
      tabName: 'Heart',
      component: HeartScreen,
      icon: <HeartIcon fill={colors.electric} />,
      valueAnimation: getWidthIconBottomBar(),
    },
    {
      id: 'Search',
      tabName: 'Search',
      component: SearchScreen,
      icon: <SearchIcon />,
      valueAnimation: getWidthIconBottomBar() * 2,
    },
    {
      id: 'Setting',
      tabName: 'Setting',
      component: SettingScreen,
      icon: <TwoBarIcon />,
      valueAnimation: getWidthIconBottomBar() * 3,
    },
  ];

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: [styles.bottomTab],
        }}>
        {listTabScreenBottom.map(item => {
          return (
            <Tab.Screen
              key={item.id}
              name={item.tabName}
              component={item.component}
              options={{
                tabBarIcon: () => <View>{item.icon}</View>,
              }}
              listeners={() => ({
                tabPress: () => {
                  Animated.spring(tabOffsetValue, {
                    toValue: item.valueAnimation,
                    useNativeDriver: true,
                  }).start();
                },
              })}
            />
          );
        })}
      </Tab.Navigator>

      <Animated.View
        style={[
          styles.borderAnimatedBottom,
          {
            width: getWidthIconBottomBar(),
            transform: [{translateX: tabOffsetValue}],
          },
        ]}
      />
    </>
  );
};

export default BottomTabNavigator;
