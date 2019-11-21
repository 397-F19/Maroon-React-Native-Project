import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-ui';

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

const ScreenThree = ({page,pagestate}) => {
    return(
        <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.qdTitle}>QuickDoc</Text>
          <Text style={styles.qdDesc}>Information on local doctors at your fingertips.</Text>
        </View>
        </View>
    );

}

export default ScreenThree;