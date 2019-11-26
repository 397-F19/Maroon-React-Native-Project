import React, { Component } from 'react';
<<<<<<< HEAD
import { Platform, ScrollView, StyleSheet, View, TouchableWithoutFeedback, Dimensions, Image  } from 'react-native';
import { Button, Drawer, Avatar } from 'react-native-material-ui';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import ModalDropdown from 'react-native-modal-dropdown';
import { Block, Text, theme } from "galio-framework";
 import { Dropdown } from 'react-native-material-dropdown';

 const { width } = Dimensions.get('screen');
=======
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Avatar } from 'react-native-material-ui';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import ModalDropdown from 'react-native-modal-dropdown';
import MultiSelect from 'react-native-multiple-select';
import Divider from 'react-native-divider';
import { Drawer } from 'native-base';

>>>>>>> origin/screen3

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
    },
    drawer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 30
    },
    addressHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#68686e',
        marginTop: 10,
        marginLeft: 7
    },
    filter: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
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


const ScreenTwo = ({jsonstate, pagestate, settingdoctor, addressState}) => {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    doctorData = jsonstate.json
    const [spec, setSpec] = React.useState([]);
<<<<<<< HEAD
    const handleSpecChange = (value,index,data) => {
        setSpec([value]);
    };

    const [insu, setInsu] = React.useState([]);
    const handleInsuChange = (value,index,data) => {
        setInsu([value]);
=======
    const handleSpecChange = (index,value) => {
        setSpec(index);
    };

    const [insu, setInsu] = React.useState([]);
    const handleInsuChange = (index, value) => {
        setInsu(index);
>>>>>>> origin/screen3
    };
    const getSpecList =() =>{
        var specialties = doctorData.map(doctor=>(doctor.specialties));
        var specialtiesSet = new Set();
        for (var i=0; i<specialties.length; i++){
            specialties[i].map(specialty=>(specialtiesSet.add(specialty.name)));
        }
    
        var specialties_kypair = [];
        var specialties_list =  Array.from(specialtiesSet);
        specialties_list.forEach(function(specialty){
            specialties_kypair.push({id:specialty, name:specialty})
        })

        return specialties_kypair
        
    }
    const getInsuList =() =>{
        var insurances= doctorData.map(doctor=>(doctor.insurances));
        var insuranceSet = new Set();
        for (var i=0; i<insurances.length;i++){
            insurances[i].map(insurance=>(insuranceSet.add(insurance.insurance_plan.name)));
        }
        var insurances_kvpair = [];
        var insurances_list = Array.from(insuranceSet);
        insurances_list.forEach(function(insurance){
            insurances_kvpair.push({id:insurance, name:insurance})
        })

        return insurances_kvpair
    }
    const specialties_list = getSpecList()
    const insurances_list = getInsuList()


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

    const DoctorCards = ({doctorData, settingdoctor, pagestate}) => {

        return(
            doctorData.map(doctor =>
          (
            <Card style={cardStyling.cardContainer} key={doctor.profile.first_name + " " + doctor.profile.last_name}>
            <CardImage resizeMode={'contain'} style={cardStyling.cardImage}
              source={{uri: doctor.profile.image_url}} 
            />
            <Text style={cardStyling.cardName}>Dr. {doctor.profile.first_name + " " + doctor.profile.last_name}</Text>
            <CardButton title="View Doctor Bio" color="white" resizeMode={'stretch'} style={cardStyling.moreButton} onPress={function(event){pagestate.setpage(3);settingdoctor.setdoc(doctor);}}></CardButton>
          </Card>
        ))
        )
    }
    
    if (doctorData.length === 0){
        return (
            <View>
                <Text style={useStyles.qdDesc}>Please choose a legal location from the dropbox</Text>
            </View>
        )
    }

    const SideBar = () => {
        return(
            <View style={useStyles.drawer}>
            <MultiSelect
            styleDropdownMenu={useStyles.filter}
            items={specialties_list}
            uniqueKey="id"
            onSelectedItemsChange={handleSpecChange}
            selectedItems={spec}
            selectText="Pick Specialties"
            searchInputPlaceholderText="Search Items..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            displayKey="name"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#CCC"
            submitButtonText="Submit"
        />
    
            <MultiSelect
                styleDropdownMenu={useStyles.filter}
                items={insurances_list}
                uniqueKey="id"
                onSelectedItemsChange={handleInsuChange}
                selectedItems={insu}
                selectText="Pick Insurances"
                searchInputPlaceholderText="Search Items..."
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                displayKey="name"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
        />
            </View>
        );
    }

    openDrawer = () => { this.drawer._root.open() };
    closeDrawer = () => { this.drawer._root.close() };

    return(
        <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar navigator={this.navigator} />} onClose={() => this.closeDrawer()} >
        <ScrollView>
        <View style={useStyles.head}>
          <Text style={useStyles.qdTitle}>QuickDoc</Text>
          <Text style={useStyles.qdDesc}>Information on local doctors at your fingertips.</Text>
        </View>
<<<<<<< HEAD
        <Dropdown
            label="Select Specialty"
            data={specialties_list.map(speci=>({value:speci}))}
            style={{color:'#000000', marginLeft:10, fontSize:20, marginTop: 10}}
            onChangeText={handleSpecChange}
          />
        <Dropdown
            label="Select Insurance"
            data={insurance_list.map(insur=>({value:insur}))}
            style={{color:'#000000', marginLeft:10,fontSize:20, marginTop: 10}}
            onChangeText={handleInsuChange}
          />

=======
        <Text style={useStyles.addressHeader}>Doctors near: {addressState.address}</Text>
        <Divider/>
        <Button text="Filter" onPress={() => this.openDrawer()}/>
>>>>>>> origin/screen3
        <DoctorCards doctorData={doctorSelector()} settingdoctor = {settingdoctor} pagestate ={pagestate} />
        <Button text="Go Back" color="blue" onPress={function(event){pagestate.setpage(1)}}></Button>
        </ScrollView>
        </Drawer>
    );

}

export default ScreenTwo;
