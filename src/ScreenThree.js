import React, { useState, useEffect} from 'react';
import { Divider, Button, StyleSheet, Text, View ,Image} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

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
    const [openrating, setOpenrating] = useState(false);
    const [openreview, setOpenreview] = useState(false);
    const handleClickOpen = () => {
        setOpenrating(true);
      };
    const handleClose = () => {
      setOpenrating(false);
    };
  
    const handleReviewClick= () =>{
      setOpenreview(!openreview);
    }

  var practicesSet = new Set();
  settingdoctor.doc.practices.map(practices=>practicesSet.add(practices.name));
  var insuranceSet = new Set();
  settingdoctor.doc.insurances.map(insurance=>insuranceSet.add(insurance.insurance_plan.name));
  return (
    <View style={styles.container}>
    <Card>
      <CardImage 
        source={{uri:settingdoctor.doc.profile.image_url}} 
      />
      <CardContent text={settingdoctor.doc.profile.first_name + " " + settingdoctor.doc.profile.last_name}/>
    </Card>

    <Card>
      <Text style={{fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>Biography</Text>
      <Divider/>
      {settingdoctor.doc.profile.bio}
    </Card>

    <Card style={{marginTop:60}}>
      <Text style={{fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>Practices</Text>
      <Divider/>
      {Array.from(practicesSet).map(practices =>
      <Text>{practices}</Text>
      )}
    </Card>
    
    <Card style={{marginTop:60}}>
      <Text style={{fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>Insurance Plans Taken</Text>
      <Divider/>
      {Array.from(insuranceSet).map(insurance =>
      <Text>{insurance}</Text>
      )}
    </Card>

    <Button style={{margin: 40, float:'right'}} onPress={function(event){pagestate.setpage(2)}}>go back</Button>

    </View>
  )  
}


  export default ScreenThree;