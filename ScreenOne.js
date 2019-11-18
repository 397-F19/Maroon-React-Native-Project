import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class GooglePlacesInput extends React.Component {
    
    render() {
      
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
            onPress={(data, details) => { // 'details' is provided when fetchDetails = true
              var lat = details.geometry.location.lat.toString();
              var lng = details.geometry.location.lng.toString();
              this.props.fetchDoctors(lat,lng);
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
    
}
  
export default class ScreenOne extends React.Component {
    render() {
      return(
        <GooglePlacesInput fetchDoctors={this.props.fetchDoctors}/>
      );
    }
}