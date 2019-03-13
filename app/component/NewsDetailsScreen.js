import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView  } from 'react-native';

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
  constructor (props) {
    super(props);
  }
  render() {
    
    return (
      <ScrollView >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.author}>
              <Text style={styles.headerTxt}>hello dlkklasdjasdas</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.headerTxt}>5 day ago</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Image
              fadeDuration={500}
              style={styles.image}
              source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
            />
            <Text style={styles.contentTxt}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
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
    flex: 2,
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
  }
});