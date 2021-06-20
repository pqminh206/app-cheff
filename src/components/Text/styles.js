import {StyleSheet} from 'react-native';

import colors from 'config/colors';
import fonts from 'config/fontFamily';
import {moderateScale} from 'utils/scaling';

export const styles = StyleSheet.create({
  slogan: {
    fontFamily: fonts.Georgia,
    fontWeight: 'bold',
    fontSize: moderateScale(30),
    lineHeight: moderateScale(35),
    color: colors.cadet,
  },
  dateTime: {
    fontFamily: fonts.SFProDisplayRegular,
    fontSize: moderateScale(12),
    lineHeight: moderateScale(14),
    color: colors.electric,
  },
  title: {
    fontFamily: fonts.SFProDisplayMedium,
    fontSize: moderateScale(18),
    lineHeight: moderateScale(21),
    color: colors.cadet,
  },
  desc: {
    fontFamily: fonts.SFProDisplayRegular,
    fontSize: moderateScale(15),
    lineHeight: moderateScale(18),
    color: colors.electric,
  },
});
