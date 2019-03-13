import React, {Component} from 'react';
import {WebView} from 'react-native';

export default class WebViewScreen extends Component {
  static navigationOptions = {
    title: 'WebView',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'null');
    return (
      <WebView
        source={{uri: item.url}}
      />
    );
  }
}