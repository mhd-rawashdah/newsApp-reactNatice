
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './app/component/HomeScreen';
import WebViewScreen from './app/component/WebViewScreen';
import NewsDetailsScreen from './app/component/NewsDetailsScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  NewsDetails: {screen: NewsDetailsScreen},
  WebView: {screen: WebViewScreen},
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

