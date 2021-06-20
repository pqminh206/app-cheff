import {StyleSheet} from 'react-native';

import {moderateScale} from 'utils/scaling';
import colors from 'config/colors';

export const styles = StyleSheet.create({
  // Bottom Tab Navigator
  bottomTab: {
    backgroundColor: colors.white,
    position: 'absolute',
    height: moderateScale(84),
    paddingTop: moderateScale(18),
  },
  borderAnimatedBottom: {
    height: moderateScale(2),
    backgroundColor: colors.tango,
    position: 'absolute',
    bottom: moderateScale(82),
  },
});
