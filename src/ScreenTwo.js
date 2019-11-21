import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View } from 'react-native';
import { Card, Button } from 'react-native-material-ui';

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
               <Card.Media
                   image={<Image source={doctor.profile.image_url} />}
                   overlay
               />
                <Card.Body>
                <Text>{doctor.profile.first_name + " " + doctor.profile.last_name}</Text>
                </Card.Body>               
             </Card>

        ))}
        </View>
    );

}

export default ScreenTwo;

