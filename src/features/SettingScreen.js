import React from 'react';
import {View, Text} from 'react-native';

import {stylesRoot} from 'utils/styles';
import {styles} from './styles';

const Setting = () => {
  return (
    <View style={[stylesRoot.fullView, styles.container]}>
      <Text>Setting!</Text>
    </View>
  );
};

export default Setting;
