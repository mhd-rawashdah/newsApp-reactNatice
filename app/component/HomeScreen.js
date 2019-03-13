import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import NewsListItem from './NewsListItem';
import ProgressBar from './ProgressBar';

export default class HomeScreen extends React.Component {
  // add navication Option
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

  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      isLoaded: true
    }
  }

  componentDidMount () {
    // call getNewsData() to fetch the data from API
     this.getNewsData();
  }

  // function to get data from API
  getNewsData() {
    const url ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1355006627464de1bea55e1cd7420d1c';
    
    return fetch(url)
      .then((response) => {
        return response.json();
      }).then((res) => {
        let articles = res.articles;
        this.setState({
          newsData: articles,
          isLoaded: false,
        })
      });
  }

  // function to onPress on ListItem that pass as props to newsListItem
  _onItemPress(item) {
    this.props.navigation.navigate('NewsDetails', { 'item': item });
  }

  render() {
    return (
      !this.state.isLoaded ? (
      <View style={styles.container}>
        <FlatList
          refreshing= {this.state.isLoaded}
          onRefresh = {this.getNewsData.bind(this)}
          keyExtractor ={(item, index) => index+''}
          data={this.state.newsData}
          renderItem={({ item }) => <NewsListItem onItemPress={this._onItemPress.bind(this)} item={item} />}
        />
      </View>
      ) : 
      (
        <ProgressBar />
      )
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