import React, { Component, useState, useEffect} from 'react';
import {Segment, Divider,ScrollView, Button, StyleSheet, Text, View ,Image} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },
    head: {
      backgroundColor: 'rgba(87, 137, 255, 100)',
    },
    qdTitle: {
      fontSize: 40,
      textAlign: 'center',
      paddingTop: 40,
      paddingBottom: 6,
      color: '#FFFFFF'
    },
    qdDesc: {
      fontSize: 16,
      textAlign: 'center',
      fontStyle: 'italic',
      margin: 5,
      color: '#FFFFFF',
      paddingBottom: 6,
    },
    instructions: {
      textAlign: 'left',
      color: '#455680',
      marginTop: 50,
      margin: 10,
      fontSize: 16,
    },
    button: {
      fontSize: 20,
      color: '#455680',
    },
  });

const ScreenThree = ({pagestate,settingdoctor,reviewstate}) => {
  const [openrating, setOpenrating] = useState(false);
  const [openreview, setOpenreview] = useState(false);
  const handleClickOpen = () => {
      setOpenrating(true);
    };
  const handleClose = () => {
    setOpenrating(false);
  };

  const handleReviewClick= () =>{
    setOpenreview(!openreview);
  }

var practicesSet = new Set();
settingdoctor.doc.practices.map(practices=>practicesSet.add(practices.name));
var insuranceSet = new Set();
settingdoctor.doc.insurances.map(insurance=>insuranceSet.add(insurance.insurance_plan.name));
var array_practices = Array.from(practicesSet)
var array_insurances = Array.from(insuranceSet)
var a = [1,2,3,4]
const test = a.map((num) =>
  <Text key = {num}>hahaha</Text>
  )
return (
  <View style={styles.container}>
    <View style={styles.head}>
      <Text style={styles.qdTitle}>QuickDoc</Text>
    </View>
    <ScrollView>
  <Card>
    <CardImage 
      source={{uri:settingdoctor.doc.profile.image_url}} 
    />
    <CardTitle
      title={settingdoctor.doc.profile.first_name + " " + settingdoctor.doc.profile.last_name}
      style ={{color: 'blue'}}
    />
  </Card>
  <Card>
    <Text style={{fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>Biography</Text>
    <Text>{settingdoctor.doc.profile.bio} </Text>
  </Card>

  <Card style={{marginTop:60}}>
    <Text style={{fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>Practices</Text>
    {/* {Array.from(practicesSet).map(practices => */}
    {/* <Text>{array_practices}</Text> */}
    {/* )} */}
  </Card>
    {array_practices.map(function(practices)
    {
      return (<Text key={practices}>{practices}</Text>)
    }
    )}
  <Card style={{marginTop:60}}>
    <Text style={{fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>Insurance Plans Taken</Text>
  </Card>
    {array_insurances.map(function(insurance)
    {
      return (<Text key={insurance}>{insurance}</Text>)
    }
    )}
  <Button  color="blue" onPress={function(event){pagestate.setpage(2)}} title="Go Back"></Button>
  </ScrollView>
  </View>
)  
}

export default ScreenThree;