import React, { Component, useState, useEffect} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ScreenOne from './src/ScreenOne.js';
import ScreenTwo from './src/ScreenTwo.js';
import ScreenThree from './src/ScreenThree.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const App = () => {
  const [json, setjson] = useState([])
  const [page, setpage] = useState(1)
  const [review, setreview] = React.useState({});
  const [doc,setdoc] = React.useState('');
  if (page == 1)
  {
    return(
      <ScreenOne jsonstate={{json, setjson}} pagestate={{page, setpage}}/>
    )
  }
  else if (page == 2){
    return(
      <ScreenTwo doctorData={json} pagestate={{page, setpage}} settingdoctor = {{doc,setdoc}}/>
  )
  }
  else if (page == 3){
    return(
      <ScreenThree pagestate={{page, setpage}} jsonstate={{json, setjson}} settingdoctor = {{doc,setdoc}} reviewstate = {{review, setreview}}/>
    )
  }
}

export default App;
