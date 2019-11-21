import React, { Component, useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button } from 'react-native-material-ui';

const GooglePlacesInput = ({jsonstate}) => {
    
    const fetchJSON = async (lat,long) => {
      console.log(jsonstate.json)
      const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location='+ lat + ',' + long + ',100&skip=2&limit=10&user_key=e98def16c263c71592c3c2f74e24097a'
      const response = await fetch(url).then((response)=> response.json()).then((response)=> response.data);
      jsonstate.setjson(response);
      // console.log(jsonstate.json)
    }
      
      return (
        <GooglePlacesAutocomplete
          placeholder='Enter Location'
          autoFocus={true}
          returnKeyType={'default'}
          fetchDetails={true}
          query={{
            key: 'AIzaSyCfjp7ZKwdAFhg773PBrwMinONqf_cGBlU',
            language: 'en', // language of the results
            // types: '(cities)' // default: 'geocode'
          }}
          fetchDetails={true}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              var lat = details.geometry.location.lat.toString();
              var lng = details.geometry.location.lng.toString();
              fetchJSON(lat,lng);
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
    backgroundColor: '#F5FCFF',
  },
  qdTitle: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 40,
  },
  qdDesc: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 4,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 60,
    margin: 10,
  },
  button: {
    marginBottom: 30
  }
});
  
export default ScreenOne = ({jsonstate, pagestate}) => {
  const switch_page = () => {
    pagestate.setpage(2)
  }
      return(
        <View style={styles.container}>
          <Text style={styles.qdTitle}>QuickDoc</Text>
          <Text style={styles.qdDesc}>Information on local doctors at your fingertips.</Text>
          <Text style={styles.instructions}>Please enter your location of interest to get started.</Text>
          <GooglePlacesInput jsonstate={jsonstate}/>
          <Button text="Submit" style={styles.button} onPress={switch_page}/>
        </View>
      );
}