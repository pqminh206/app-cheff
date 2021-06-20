import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles';

export const SloganText = ({children}) => {
  return <Text style={styles.slogan}>{children}</Text>;
};

export const DateTimeText = ({children}) => {
  return <Text style={styles.dateTime}>{children}</Text>;
};

export const TitleText = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export const DescText = ({children}) => {
  return <Text style={styles.desc}>{children}</Text>;
};
