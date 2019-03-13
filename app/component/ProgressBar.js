import React, {Component} from 'react';
import {ProgressBarAndroid, AppRegistry, StyleSheet, View} from 'react-native';

export default class ProgressBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid  color="#f4511e" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
});