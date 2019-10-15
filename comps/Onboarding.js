import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/OnboardingStyles';

const Onboarding = props => {
  let img = '';
  let titleText = '';
  let descText = '';

  switch (props.first) {
    case 'Book':
      img ="<Image source={require('../assets/Images/onboardingBooking.png')}/>";
      titleText = 'Book Your Machine Easily';
      descText ='Book washing machine or dryer. Booking is allowed when the machine has 5 minutes left until it finish its cycle. Extend the duration of each machine if needed!';
      break;
    case 'Alert':
      img = "<Image source={require('../assets/Images/onboardingAlert.png')}/>";
      titleText = 'Alert Other Users';
      descText = '';
      break;
    case 'Report':
      img ="<Image source={require('../assets/Images/onboardingReport.png')}/>";
      titleText = 'Report Broken Machines';
      descText = '';
  }

  return (
    <View style={styles.background}>
      <View style={styles.options}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.optionsText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tutorialCont}>
        <Image source={require('../assets/Images/onboardingBooking.png')} />
        <Text style={styles.title}>Book Your Machine Easily</Text>
        <Text style={styles.descTxt}>
          Book washing machine or dryer. Booking is allowed when the machine has
          5 minutes left until it finish its cycle. Extend the duration of each
          machine if needed!
        </Text>
        <View style={styles.checkboxesCont}>
          <TouchableOpacity
            onPress={() => {
              props.setOnboarding('Book');
            }}>
            <Image source={require('../assets/Images/unchecked.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Images/unchecked.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/Images/unchecked.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.optionsText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
