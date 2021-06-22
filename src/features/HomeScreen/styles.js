import {StyleSheet} from 'react-native';

import {moderateScale} from 'utils/scaling';
import colors from 'config/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(30),
    paddingHorizontal: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(35),
  },
  dinnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(20),
  },
  dinnerText: {
    color: colors.white,
    marginLeft: moderateScale(8),
  },
  recipeList: {
    paddingLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  viewLine: {
    marginTop: moderateScale(30),
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(35),
  },
  contentLine: {
    height: moderateScale(2),
    width: '100%',
    backgroundColor: colors.line,
  },
});
