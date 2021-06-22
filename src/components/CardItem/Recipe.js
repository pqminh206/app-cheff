import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from 'config/colors';
import {moderateScale} from 'utils/scaling';
import {HeartIcon, ClockIcon, StartIcon} from 'assets/images/svg';

import {TitleText, DescText} from 'components/Text';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: moderateScale(12),
    width: moderateScale(260),
  },
  image: {
    width: '100%',
    height: moderateScale(170),
    borderRadius: moderateScale(20),
  },
  heartIcon: {
    position: 'absolute',
    top: moderateScale(20),
    right: moderateScale(20),
  },
  viewContent: {
    marginTop: moderateScale(20),
  },
  viewCount: {
    flexDirection: 'row',
  },
  textCount: {
    fontSize: moderateScale(16),
    color: '#2C364C',
    marginLeft: moderateScale(8),
    marginRight: moderateScale(18),
  },
});

const CardItemRecipe = ({dataItem}) => {
  return (
    <View style={styles.container}>
      <Image key={dataItem.id} source={dataItem.image} style={styles.image} />
      <TouchableOpacity style={styles.heartIcon}>
        <HeartIcon fill={colors.white} />
      </TouchableOpacity>
      <View style={styles.viewContent}>
        <TitleText style={{marginBottom: moderateScale(8)}}>
          {dataItem.title}
        </TitleText>
        <DescText style={{marginBottom: moderateScale(12)}}>
          {dataItem.description}
        </DescText>
        <View style={styles.viewCount}>
          <ClockIcon />
          <DescText style={styles.textCount}>25&apos;</DescText>
          <StartIcon />
          <DescText style={styles.textCount}>4,7</DescText>
        </View>
      </View>
    </View>
  );
};

export default CardItemRecipe;
