import React, { Component, useState, useEffect} from 'react';
import {Segment, ScrollView, Button, StyleSheet, Text, View ,Image} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import Divider from 'react-native-divider';
import StarRating from 'react-native-star-rating';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import db from './db.js';


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

const docInfoStyles = StyleSheet.create({
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
  secTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 16,
  },
  secContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  secEnd: {
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'rgba(87, 137, 255, 100)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 8
  },
});

const ScreenThree = ({pagestate,settingdoctor,reviewstate}) => {
  const [openrating, setOpenrating] = useState(false);
  const [openreview, setOpenreview] = useState(false);
  const docname = settingdoctor.doc.profile.first_name + " " + settingdoctor.doc.profile.last_name;
  const handleClickOpen = () => {
      setOpenrating(true);
    };
  const handleClose = () => {
    setOpenrating(false);
  };

  const handleReviewClick= () =>{
    setOpenreview(!openreview);
  }
  const [ratingval, setratingval] = React.useState(0);
  const [reviewval, setreviewval] = React.useState('');
  const [reviewcomment, setreviewcomment] = React.useState([]);
  const ratingChanged = (rating) => {
    setratingval(rating);
  }
  const submitrating = () =>{
    if (Object.keys(reviewstate.review).includes(docname)){
      db.child(docname).child("reviews").child(reviewstate.review[docname]["totalcount"]+1).set({rating: ratingval, review: reviewval})
      db.child(docname).update({totalrating: reviewstate.review[docname]["totalrating"]+ratingval, totalcount: reviewstate.review[docname]["totalcount"]+1})
    }
    else{
      db.child(docname).set({totalrating: ratingval, totalcount: 1})
      db.child(docname).child("reviews").child(1).set({rating: ratingval, review: reviewval})
    }
    setOpenrating(false);
  }

var practicesSet = new Set();
settingdoctor.doc.practices.map(practices=>practicesSet.add(practices.name));
var insuranceSet = new Set();
settingdoctor.doc.insurances.map(insurance=>insuranceSet.add(insurance.insurance_plan.name));
var array_practices = Array.from(practicesSet)
var array_insurances = Array.from(insuranceSet)

const getReviews = (docname) =>{
  var docReviews = [];
  if (Object.keys(reviewstate.review).includes(docname)){
    Object.keys(reviewstate.review[docname]["reviews"]).map((key)=>{docReviews.push(reviewstate.review[docname]["reviews"][key])})
  }
  return docReviews;  
}

return (
  <View style={styles.container}>
    <View style={styles.head}>
      <Text style={styles.qdTitle}>QuickDoc</Text>
    </View>
    <ScrollView>
  
  <View style={docInfoStyles.cardContainer}>
    <CardImage resizeMode={'contain'} style={docInfoStyles.cardImage}
      source={{uri:settingdoctor.doc.profile.image_url}} 
    />
    <Text style={docInfoStyles.cardName}>Dr. {docname}</Text>
    {
      Object.keys(reviewstate.review).includes(docname) ? <StarRating  rating={reviewstate.review[docname]["totalrating"]/reviewstate.review[docname]["totalcount"]} /> : <Text> No rating </Text>
    }
  </View>

    <Text style={docInfoStyles.secTitle}>Biography</Text>
    <Text style={docInfoStyles.secContent}>{settingdoctor.doc.profile.bio} </Text>
    <Text style={docInfoStyles.secEnd}/>
    <Divider />
    <Text style={docInfoStyles.secTitle}>Practices</Text>
    {array_practices.map(function(practices)
    {return (<Text style={docInfoStyles.secContent} key={practices}>{practices}</Text>)}
    )}
    <Text style={docInfoStyles.secEnd}/>
    <Divider/>
    <Text style={docInfoStyles.secTitle}>Insurance Plans Taken</Text>
    {array_insurances.map(function(insurance)
    {
      return (<Text style={docInfoStyles.secContent} key={insurance}>{insurance}</Text>)
    }
    )}
    <Text style={docInfoStyles.secEnd}/>

    <Dialog
    visible={openrating}
    footer={
      <DialogFooter>
        <DialogButton
          text="CANCEL"
          onPress={() => {setOpenrating(false)}}
        />
        <DialogButton
          text="SUBMIT"
          onPress={() => {submitrating();setOpenrating(false);}}
        />
      </DialogFooter>
    }
  >
    <DialogContent>
    <StarRating  selectedStar={(rating)=>setratingval(rating)} rating={ratingval}/>
    <TextField
        label='write your review'
        // keyboardType='phone-pad'
        // formatText={formatText}
        value={reviewval}
        onChangeText={(e) => setreviewval(e)}
      />
    </DialogContent>
  </Dialog>

  <Dialog visible={openreview}>
    <DialogContent>
    {getReviews(docname).map((review, i)=>
    (<View key = {i}>
    <Text >Review {i + 1}:  {review.review}</Text>
     <Divider/>
    </View>
    ))}
    </DialogContent>
    <DialogFooter>
        <DialogButton
          text="BACK"
          onPress={() => {setOpenreview(false)}}
        />
      </DialogFooter>
  </Dialog>

  <Button
    title="rate the doctor"
    onPress={() => {
      setOpenrating(true);
    }}
  />
  <Button
    title="reviews of the doctor"
    onPress={() => {
      setOpenreview(true);
    }}
  />
  <CardButton color="white" resizeMode={'contain'} style={docInfoStyles.backButton} onPress={function(event){pagestate.setpage(2)}} title="Back"></CardButton>

  </ScrollView>
  </View>
)  
}

export default ScreenThree;