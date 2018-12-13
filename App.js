/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon, Text } from '@shoutem/ui';
import Home from './components/Home';
import Event from './components/Event';
import DetailArticle from './components/DetailArticle';
import Gallery from './components/Gallery';

const HomeStack = createStackNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      }
  },
  DetailArticle: {
      screen: DetailArticle,
      navigationOptions: ({navigation}) => ({
        title: 'Detail Article',
        headerTitle: <Text>Detail Article</Text>
      })
  },
});
const EventStack = createStackNavigator({
  Event: Event
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Event: Event,
  Gallery: Gallery
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Event') {
          iconName = `add-event`;
        }else if (routeName === 'Gallery') {
          iconName = `photo`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#03A9F4',
      inactiveTintColor: 'gray',
    },
  });

export default createAppContainer(TabNavigator);