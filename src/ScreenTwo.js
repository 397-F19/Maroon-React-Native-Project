import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const classes = StyleSheet.create(theme => ({
    grid: {
      marginLeft: 250,
      marginTop: 75,
      paddingLeft: 60,
    },
    card:{
      display:"flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: 450,
      height: 250,
      paddingTop: 20,
    },
    content:{
      display:"flex",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }
  }));

const ScreenTwo = ({doctorData,pagestate}) => {

    return(
        <ScrollView>
        {doctorData.map(doctor =>
          (
             <Card key={doctor.profile.first_name + " " + doctor.profile.last_name}>
              <CardImage 
                source={{uri: doctor.profile.image_url}} 
              />
              <CardContent text={doctor.profile.first_name + " " + doctor.profile.last_name}/>
              <CardButton title="View Doctor Bio" color="blue" onPress={() => {pagestate.setpage(3)}}></CardButton>
            </Card>
        ))}
        <Button text="Go Back" color="blue" onPress={() => {pagestate.setpage(1)}}></Button>
        </ScrollView>
    );

}

export default ScreenTwo;

