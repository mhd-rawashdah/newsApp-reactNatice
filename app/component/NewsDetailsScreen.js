import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Button } from 'react-native';
import moment from 'moment';
export default class NewsDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'NewsDetails',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  // open the article in webview
  _onPressButton() {
    this.props.navigation.navigate('WebView', { 'item': this.props.navigation.getParam('item') });
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'No Data Exist');
    return (
      <ScrollView >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTxt}>{item.title}</Text>
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.author}>
              <Text style={styles.headerTxt}>{"Author: " + item.source.name}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.headerTxt}>{moment(item.publishedAtmoment).fromNow()}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Image
              fadeDuration={500}
              style={styles.image}
              source={{ uri: item.urlToImage }}
            />
            <Text style={styles.contentTxt}>{item.content}</Text>
          </View>
          <View style={styles.button}>
            <Button
              onPress={this._onPressButton.bind(this)}
              title="Read More"
              color="#222"
              accessibilityLabel="Read More about the artical"
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    paddingBottom: 5
  },
  titleTxt: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  author: {
    flex: 1,
    alignItems: 'flex-start',
  },
  date: {
    flex: 1,
    alignItems: 'flex-end',

  },
  headerTxt: {
    fontSize: 15,
    color: '#666',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
    alignContent: 'stretch',
  },
  content: {
    marginTop: 10,
    justifyContent: 'space-evenly'
  },
  contentTxt: {
    fontSize: 17,
    padding: 10
  },
  button: {
    justifyContent: 'center',
    marginTop: 15

  },
});