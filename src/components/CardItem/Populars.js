import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {TitleText} from 'components/Text';
import {moderateScale} from 'utils/scaling';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: moderateScale(15),
  },
  image: {
    width: moderateScale(90),
    height: moderateScale(90),
  },
  text: {
    marginTop: moderateScale(12),
  },
});

const CardItemPopulars = ({dataItem}) => {
  return (
    <View style={styles.container}>
      <Image source={dataItem.image} style={styles.image} />
      <TitleText style={styles.text}>{dataItem.title}</TitleText>
    </View>
  );
};

export default CardItemPopulars;
