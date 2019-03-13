
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './app/component/HomeScreen';
import SplashScreen from './app/component/SplashScreen';
import NewsDetailsScreen from './app/component/NewsDetailsScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  NewsDetails: {screen: NewsDetailsScreen},
  Splash: {screen: SplashScreen},
},
{
  initialRouteName: "Home",
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer  />
    );
  }
}

