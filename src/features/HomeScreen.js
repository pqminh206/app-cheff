import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {stylesRoot} from 'utils/styles';
import {SloganText, DateTimeText, TitleText, DescText} from 'components/Text';

import {styles} from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={stylesRoot.fullView}>
      <View style={[stylesRoot.fullView, styles.container]}>
        <SloganText>Test!</SloganText>
        <DateTimeText>Home!</DateTimeText>
        <TitleText>Home!</TitleText>
        <DescText>Home!</DescText>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
