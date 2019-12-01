import React, { Component, useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button } from 'react-native-material-ui';

const GooglePlacesInput = ({jsonstate, addressState}) => {
    
    const fetchJSON = async (lat,long) => {
      const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location='+ lat + ',' + long + ',100&skip=2&limit=10&user_key=e98def16c263c71592c3c2f74e24097a'
      const response = await fetch(url).then((response)=> response.json()).then((response)=> response.data);
      jsonstate.setjson(response);
    }
      
      return (
        <GooglePlacesAutocomplete
          placeholder='Enter Location'
          autoFocus={false}
          listViewDisplayed='false'
          // returnKeyType={'default'}
          fetchDetails={true}
          types={[]}
          query={{
            key: 'AIzaSyCfjp7ZKwdAFhg773PBrwMinONqf_cGBlU',
            language: 'en', // language of the results
            // types: '(cities)' // default: 'geocode'
          }}
          // fetchDetails={true}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              var lat = details.geometry.location.lat.toString();
              var lng = details.geometry.location.lng.toString();
              fetchJSON(lat,lng);
              addressState.setaddress(details.name);

          }}   
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth:0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
          }}
          currentLocation={true}
        />
      )
}

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
  
export default ScreenOne = ({jsonstate, pagestate, addressState}) => {
  const switch_page = () => {
    if (jsonstate.json.length == 0){
      return
    }
    else{
      pagestate.setpage(2)
    }

    
  }
      return(
        <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.qdTitle}>QuickDoc</Text>
          <Text style={styles.qdDesc}>Information on local doctors at your fingertips.</Text>
        </View>
          <Text style={styles.instructions}>Please enter your location of interest to get started.</Text>
          <GooglePlacesInput jsonstate={jsonstate} addressState={addressState}/>
          <Button text="Submit" onPress={switch_page} 
                  style={{container: {backgroundColor: 'rgba(87, 137, 255, 100)', height: 50},
                        text: {fontSize: 20, color: '#FFFFFF'}}}/>
        </View>
      );
}