import React from 'react';
import {View, Text} from 'react-native';

import {stylesRoot} from 'utils/styles';
import {styles} from './styles';

const SearchScreen = () => {
  return (
    <View style={[stylesRoot.fullView, styles.container]}>
      <Text>SearchScreen!</Text>
    </View>
  );
};

export default SearchScreen;
