import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
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

const ScreenTwo = ({doctorData}) => {
    return(
        <View>
        {doctorData.map(doctor =>
          (
             <Card>
              <CardImage 
                source={{uri: doctor.profile.image_url}} 
                title="Above all i am here"
              />
              <CardContent text={doctor.profile.first_name + " " + doctor.profile.last_name}/>
            </Card>
        ))}
        </View>
    );

}

export default ScreenTwo;

