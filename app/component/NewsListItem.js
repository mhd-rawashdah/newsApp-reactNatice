import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';


export default class NewsListItem extends React.Component {

  // function to excute the recive function onPressItem 
  //from HomeScreen and pass the target item to active onPress on ListItem
  _onItemPress() {
    this.props.onItemPress(this.props.item)
  }
  render() {
    return (
      <TouchableOpacity onPress={this._onItemPress.bind(this)}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.title}>
              <Text style={styles.titleTxt}>{this.props.item.title}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.dateTxt}>{moment(this.props.item.publishedAtmoment).fromNow()} </Text>
            </View>
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={{ uri: this.props.item.urlToImage }}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f4f4f4',
    flex: 1,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

  },
  imgContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    height: 90,
    width: 90,
    borderRadius: 10
  },
  textContainer: {
    flex: 2,
    marginRight: 10
  },
  title: {
    flex: 3,
  },
  titleTxt: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  date: {
    marginTop: 10,
    flex: 1,
  },
  dateTxt: {
    color: '#666',
  }
})


