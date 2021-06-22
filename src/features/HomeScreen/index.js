import React from 'react';
import {View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {stylesRoot} from 'utils/styles';
import {DinnerIcon} from 'assets/images/svg';
import {SloganText, DateTimeText, TitleText} from 'components/Text';

import CardItemRecipe from 'components/CardItem/Recipe';
import CardItemPopulars from 'components/CardItem/Populars';

import {styles} from './styles';

// Static data to displaty in list
const tempDataRecipe = [
  {
    id: 'first',
    image: require('assets/images/png/food.png'),
    title: 'Pumpkin Soup',
    description: 'Amazing combo of sweet and sour taste!',
  },
  {
    id: 'second',
    image: require('assets/images/png/rice.png'),
    title: 'Chicken fried',
    description: 'Amazing combo of swe',
  },
];

const tempPopulars = [
  {
    id: 'french',
    image: require('assets/images/png/french-food.png'),
    title: 'French',
  },
  {
    id: 'italian',
    image: require('assets/images/png/french-food.png'),
    title: 'Italian',
  },
  {
    id: 'asian',
    image: require('assets/images/png/french-food.png'),
    title: 'Asian',
  },
  {
    id: 'indian',
    image: require('assets/images/png/french-food.png'),
    title: 'Indian',
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={stylesRoot.fullView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={[styles.container]}>
          <View style={styles.header}>
            <View>
              <SloganText>Your Meals</SloganText>
              <DateTimeText>The, Nov 14</DateTimeText>
            </View>
            <View>
              <TouchableOpacity style={styles.dinnerView}>
                <DinnerIcon />
                <TitleText style={styles.dinnerText}>Dinner</TitleText>
              </TouchableOpacity>
            </View>
          </View>
          <TitleText>Recipe of the day</TitleText>
        </View>
        <View style={styles.recipeList}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={tempDataRecipe}
            renderItem={({item}) => <CardItemRecipe dataItem={item} />}
          />
        </View>
        <View style={styles.viewLine}>
          <View style={styles.contentLine} />
        </View>
        <View style={[styles.container]}>
          <TitleText>Populars</TitleText>
        </View>
        <View style={styles.recipeList}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={tempPopulars}
            renderItem={({item}) => <CardItemPopulars dataItem={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
