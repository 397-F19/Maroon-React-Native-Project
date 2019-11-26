import React, { Component, useState, useEffect} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ScreenOne from './src/ScreenOne.js';
import ScreenTwo from './src/ScreenTwo.js';
import ScreenThree from './src/ScreenThree.js';
import db from './src/db.js';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const App = () => {
  const [json, setjson] = useState([])
  const [page, setpage] = useState(1)
  const [doc, setdoc] = useState('');
  const [review, setreview] = React.useState({});
  const [address, setaddress] = useState('');

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setreview(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  if (page == 1)
  {
    return(
      <ScreenOne jsonstate={{json, setjson}} pagestate={{page, setpage}} addressState={{address, setaddress}}/>
    )
  }
  else if (page == 2){
    return(
      <ScreenTwo jsonstate={{json, setjson}} pagestate={{page, setpage}} settingdoctor={{doc,setdoc}} addressState={{address, setaddress}}/>
    )
  }
  else{
    return (
      <ScreenThree pagestate={{page,setpage}} settingdoctor={{doc,setdoc}} reviewstate = {{review, setreview}}/>
    )
  }
}

export default App;