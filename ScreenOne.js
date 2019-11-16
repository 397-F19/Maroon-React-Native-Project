import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const fetchjson = async (props,lat,long) => {
    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location='+ lat + ',' + long + ',100&skip=2&limit=10&user_key=e98def16c263c71592c3c2f74e24097a'
    const response = await fetch(url).then((response)=> response.json()).then((response)=> response.data);
    // console.log(typeof(response))
    // console.log(response)
    props.doctorJSON = response;
}
  
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
            //fetches doctorJSON data after place is selected
            onPlaceSelected={(place) => {
              var lat = place.geometry.location.lat().toString();
              var lng = place.geometry.location.lng().toString();
              fetchjson(lat,lng);
              console.log(this.props.doctorJSON)
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
        <GooglePlacesInput/>
      );
    }
}