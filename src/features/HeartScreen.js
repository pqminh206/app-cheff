import React from 'react';
import {View, Text} from 'react-native';

import {stylesRoot} from 'utils/styles';
import {styles} from './styles';

const HeartScreen = () => {
  return (
    <View style={[stylesRoot.fullView, styles.container]}>
      <Text>HeartScreen!</Text>
    </View>
  );
};

export default HeartScreen;
