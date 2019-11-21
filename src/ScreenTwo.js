import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { Dropdown } from 'react-native-material-dropdown';
import {Drawer} from 'react-native-drawer';

const useStyles = StyleSheet.create({
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
      head: {
        backgroundColor: 'rgba(87, 137, 255, 100)',
      }
  });

const cardStyling = StyleSheet.create({
    cardContainer: {
      margin: 40,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    cardImage: {
      backgroundColor: '#FFFFFF'
    },
    cardName: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      textAlign: 'center'
    },
    moreButton: {
      backgroundColor: 'rgba(87, 137, 255, 100)',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingLeft: 80,
      paddingRight: 90,
    },
  });

const ScreenTwo = ({doctorData,pagestate}) => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    return(
        <ScrollView>
        <View style={useStyles.head}>
          <Text style={useStyles.qdTitle}>QuickDoc</Text>
          <Text style={useStyles.qdDesc}>Information on local doctors at your fingertips.</Text>
          <Button text="Filter" onPress={handleDrawerOpen}/>
        </View>
        {/* <Drawer
        //    className={useStyles.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            tapToClose={true}
            classes={{
          //  paper: useStyles.drawerPaper,
            }}
        /> */}
        {doctorData.map(doctor =>
          (
             <Card style={cardStyling.cardContainer} key={doctor.profile.first_name + " " + doctor.profile.last_name}>
              <CardImage resizeMode={'contain'} style={cardStyling.cardImage}
                source={{uri: doctor.profile.image_url}} 
              />
              {/* <CardContent  text={doctor.profile.first_name + " " + doctor.profile.last_name}/> */}
              <Text style={cardStyling.cardName}>Dr. {doctor.profile.first_name + " " + doctor.profile.last_name}</Text>
              <CardButton title="View Doctor Bio" color="white" resizeMode={'stretch'} style={cardStyling.moreButton} onPress={() => {pagestate.setpage(3)}}></CardButton>
            </Card>
        ))}
        <Button text="Go Back" color="blue" onPress={() => {pagestate.setpage(1)}}></Button>
        </ScrollView>
    );

}

export default ScreenTwo;

