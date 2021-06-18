import React from 'react';
import {View, Text} from 'react-native';

import {stylesRoot} from 'utils/styles';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <View style={[stylesRoot.fullView, styles.container]}>
      <Text>Home!</Text>
    </View>
  );
};

export default HomeScreen;
