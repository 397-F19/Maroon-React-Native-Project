import React, { Component } from 'react';
import {Card, Button, Divider} from 'react-native-material-ui';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { thisTypeAnnotation } from '@babel/types';
import PageThree from './PageThree.js';
import sampledoc from './sampledoctor.json';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.welcome}>this is actually super cool</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <PageThree currdoctor={sampledoc}></PageThree>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});