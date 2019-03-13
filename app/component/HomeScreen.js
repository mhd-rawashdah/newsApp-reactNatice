import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import NewsListItem from './NewsListItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  _onItemPress(item) {
    this.props.navigation.navigate('NewsDetails', {'item': item});
  }
  render() {
    const data = [
      { id: 1, title: 'HEllodsdsdasbdasddsd', img: 'https://facebook.github.io/react-native/docs/assets/favicon.png', date: '5 day ago' },
      { id: 2, title: 'HEllodsdsdasbdasddsd', img: 'https://facebook.github.io/react-native/docs/assets/favicon.png', date: '5 day ago' },
      { id: 3, title: 'HEllodsdsdasbdasddsd', img: 'https://facebook.github.io/react-native/docs/assets/favicon.png', date: '5 day ago' },
      { id: 4, title: 'HEllodsdsdasbdasddsd', img: 'https://facebook.github.io/react-native/docs/assets/favicon.png', date: '5 day ago' },
      { id: 5, title: 'HEllodsdsdasbdasddsd', img: 'https://facebook.github.io/react-native/docs/assets/favicon.png', date: '5 day ago' }

    ]
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => <NewsListItem key={item} onItemPress= {this._onItemPress.bind(this)} item={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f4f4f4',
    flex: 1,
  }


})