import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button } from 'react-native-material-ui';

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
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
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
  
export default class ScreenOne extends React.Component {
    shouldComponentUpdate() {
      return false;
    }  

    render() {
      return(
        <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.qdTitle}>QuickDoc</Text>
          <Text style={styles.qdDesc}>Information on local doctors at your fingertips.</Text>
        </View>
          <Text style={styles.instructions}>Please enter your location of interest to get started.</Text>
          <GooglePlacesInput fetchDoctors={this.props.fetchDoctors}/>
          <Button style={{ text: styles.button}} text="Submit" onPress={this.props.changeScreen}/>
        </View>
      );
    }
}