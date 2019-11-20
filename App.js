import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ScreenOne from './src/ScreenOne.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {doctorJSON: []};

  }

  fetchJSON = async (lat,long) => {
    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location='+ lat + ',' + long + ',100&skip=2&limit=10&user_key=e98def16c263c71592c3c2f74e24097a'
    const response = await fetch(url).then((response)=> response.json()).then((response)=> response.data);
    // console.log(typeof(response))
    // console.log(response)
    this.setState({ doctorJSON: response });
  }
  
  render() {
    return (
      <ScreenOne fetchDoctors={this.fetchJSON} doctorData={this.state.doctorJSON}/>
    );
  }
}

