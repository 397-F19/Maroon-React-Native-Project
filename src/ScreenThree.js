import React, { useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        alignItems: 'center'
      },
})
const ScreenThree = ({pagestate,settingdoctor,reviewstate}) => {
    const [openrating, setOpenrating] = React.useState(false);
    const [openreview, setOpenreview] = React.useState(false);
    const handleClickOpen = () => {
        setOpenrating(true);
      };
      const handleClose = () => {
        setOpenrating(false);
      };
    
      const handleReviewClick= () =>{
        setOpenreview(!openreview);
      }
    return(
    <View style={styles.container}>
        <Text>This is ScreenThree</Text>
        <Button 
            title="Review the doctor" 
            onPress={handleClickOpen}
        />
    </View>
    )
    
  }


  export default ScreenThree;