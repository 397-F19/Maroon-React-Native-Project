import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, Avatar } from 'react-native-material-ui';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
// import { Dropdown } from 'react-native-material-dropdown';
// import {Drawer} from 'react-native-drawer';

const useStyles = StyleSheet.create({
    qdTitle: {
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 30,
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
  const cardStyling = StyleSheet.create({
    cardContainer: {
      margin: 30,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingRight: 10
    },
    cardImage: {
      backgroundColor: '#FFFFFF',
      paddingTop: 10,
      marginBottom: 0,
    },
    cardName: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 6,
      textAlign: 'center'
    },
    moreButton: {
      backgroundColor: 'rgba(87, 137, 255, 100)',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingLeft: 80,
      paddingRight: 80,
      marginTop: 10,
    },
  });

const ScreenTwo = ({jsonstate, pagestate, settingdoctor}) => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    doctorData = jsonstate.json
    // console.log(doctorData)
    // const switch_page = ({num}) => {
    //     pagestate.setpage(1)
    //   }

    const [spec, setSpec] = React.useState([]);
    const handleSpecChange = event => {
        setSpec(event.target.value);
    };

    const [insu, setInsu] = React.useState([]);
    const handleInsuChange = event => {
        setInsu(event.target.value);
    };
    const getSpecList =() =>{
        var specialties = doctorData.map(doctor=>(doctor.specialties));
        var specialtiesSet = new Set();
        for (var i=0; i<specialties.length; i++){
            specialties[i].map(specialty=>(specialtiesSet.add(specialty.name)));
        }
    
        
        return Array.from(specialtiesSet)
    }
    const getInsuList =() =>{
        var insurances= doctorData.map(doctor=>(doctor.insurances));
        var insuranceSet = new Set();
        for (var i=0; i<insurances.length;i++){
            insurances[i].map(insurance=>(insuranceSet.add(insurance.insurance_plan.name)));
        }
        
        return Array.from(insuranceSet)
    }
    const specialties_list = getSpecList()
    const insurance_list = getInsuList()


    const matchInsu = (doctor) =>{
        var flag = 0
        doctor.insurances.map(insurance=>(insu.includes(insurance.insurance_plan.name) ? flag = 1 : false))
        if (flag===0){
            return false
        }
        else{
            return true
        }
    }
    const matchSpec = (doctor) =>{
        var flag = 0
        doctor.specialties.map(specialty=>(spec.includes(specialty.name) ? flag = 1 : false))
        if (flag===0){
            return false
        }
        else{
            return true
        }
        
    }
    const doctorSelector = () =>{
        if (insu.length != 0 && spec.length != 0)
        {
            return doctorData.filter(doctor=>matchInsu(doctor)).filter(doctor=>matchSpec(doctor));
        }
        else if (insu.length != 0)
        {
            return doctorData.filter(doctor=>matchInsu(doctor));
        }
        else if (spec.length != 0)
        {
            return doctorData.filter(doctor=>matchSpec(doctor));
        }
        else
        {
            return doctorData;
        }
        
    }

    if (doctorData.length === 0){
        return (
            <View>
                <Text style={useStyles.qdDesc}>Please choose a legal location from the dropbox</Text>
            </View>
        )
    }

    console.log(specialties_list)
    return(
        <ScrollView>
        <View style={useStyles.head}>
          <Text style={useStyles.qdTitle}>QuickDoc</Text>
          <Text style={useStyles.qdDesc}>Information on local doctors at your fingertips.</Text>
          {/* <Button text="Filter" onPress={handleDrawerOpen}/> */}
        </View>
        <Drawer>
        <Drawer.Section
            title="Specialties"
            items={specialties_list.map(specialty =>(
                {value: specialty, onPress: handleSpecChange, active: false}
            ))}
        />
        <Drawer.Section

            title="Insurance"
            items={insurance_list.map(insurance =>(
                {value: insurance, onPress: handleInsuChange}
            ))}
        />
      </Drawer>
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
            <CardButton title="View Doctor Bio" color="white" resizeMode={'stretch'} style={cardStyling.moreButton} onPress={function(event){pagestate.setpage(3);settingdoctor.setdoc(doctor);}}></CardButton>
          </Card>
        ))}
        <Button text="Go Back" color="blue" onPress={function(event){pagestate.setpage(1)}}></Button>
        </ScrollView>
    );

}

export default ScreenTwo;
