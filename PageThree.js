import React, { Component } from 'react';
import Stars from 'react-native-stars';

import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Dialog,
    Text,
    View,
    Image,
    AsyncStorage
  } from 'react-native';
import {Card, Button, Divider} from 'react-native-material-ui';

const pageThreeStyles = StyleSheet.create(theme => ({
    bio:{
      marginTop: 60,
      marginBottom: 10,
    },
    button:{
      marginTop: 20,
    },
    h3:{
      padding: '60 px',
      fontSize: 72,
    }
   }));

export default class PageThree extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        currdoctor: {},
        ratingval: 0,
        reviewval: '',
        openrating: false
      }
    }
  
    handleReviewChange = (text) => {
      this.setState({reviewval: text})
    }

    handleRatingChange = (num) => {
        this.setState({ratingval: num})
    }
  
    render () {
    const {currdoctor} = this.state.currdoctor;
    const {ratingval} = this.state.ratingval;
    const {reviewval} = this.state.reviewval;
    const {openrating} = this.state.openrating;
    const classes = pageThreeStyles();

    return (
    <View style={{marginLeft: 20, marginRight: 20}}>
    <div className={classes.bio}>
    <h3 style={{fontSize: 36, padding: '50 px', paddingTop: 40}}><strong>{currdoctor.profile.first_name + " " + currdoctor.profile.last_name}</strong></h3>
    <div style={{float: 'right'}}>
      <CardMedia><img src={currdoctor.profile.image_url}></img></CardMedia>
    </div>
    
    <p style={{marginTop: 140}}>
      <h5 style={{fontSize: 18, fontStyle: 'italic', marginBottom: 10}}>Biography</h5>
      <Divider/>
      {currdoctor.profile.bio}
    </p>


    <Button className={classes.button} variant="contained"  onClick={handleClickOpen}>
        Review the doctor
      </Button>
      <Dialog open={openrating} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Dialog.Title id="form-dialog-title">Subscribe</Dialog.Title>
        <Dialog.Content>
          <Dialog.ContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </Dialog.ContentText>
          <Stars count={5} half={true} value={ratingval} update={handleratingChanged} size={24} color2={'#ffd700'} />
          <TextInput value={reviewval} onChangeText={this.handleReviewChange}>Review</TextInput>        
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleClose} color="primary">
            Cancel
          </Button>
          <Button onPress={submitrating} color="primary">
            Submit
          </Button>
        </Dialog.Actions>
      </Dialog>
    <Button style={{margin: 40, float:'right'}} className={classes.button} variant="contained" color="primary" align="center" size="large">go back</Button>
    </div>
    </View>
      )
    }
  }