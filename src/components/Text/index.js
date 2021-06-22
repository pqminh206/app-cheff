import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';

export const SloganText = ({children}) => {
  return <Text style={styles.slogan}>{children}</Text>;
};

export const DateTimeText = ({children}) => {
  return <Text style={styles.dateTime}>{children}</Text>;
};

export const TitleText = ({children, ...props}) => {
  return <Text style={[styles.title, props.style]}>{children}</Text>;
};

export const DescText = ({children, ...props}) => {
  return <Text style={[styles.desc, props.style]}>{children}</Text>;
};
