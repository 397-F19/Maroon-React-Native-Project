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

