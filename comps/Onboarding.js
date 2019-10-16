import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/OnboardingStyles';

const Onboarding = props => {
  let mainImg = '';
  let mainTitle = '';
  let mainDesc = '';
  let mainButt = '';

  switch (props.name) {
    case 'firstOnboarding':
      mainImg = '{require("../assets/Images/OnboardingBook.png")}';
      mainTitle = 'Book Machines Easily';
      mainDesc = 'Book washing machines or dryers';
      break;
    case 'secondOnboarding':
      mainImg = '{require("../assets/Images/OnboardingStatus.png")}';
      mainTitle = 'Status';
      mainDesc = 'Check how much time is remaining from your machine. Extend your machine if needed!';
      break;
    case 'thirdOnboarding':
      mainImg = '{require("../assets/Images/OnboardingNotify.png")}';
      mainTitle = 'Notify Other Users';
      mainDesc = 'Notify residents in your building when their laundry is ready to be picked up from the machine.';
      break;
    case 'fourthOnboarding':
      mainImg = '{require("../assets/Images/OnboardingReport.png")}';
      mainTitle = 'Report Machines';
      mainDesc = 'Notify residents in your building when their laundry is ready to be picked up from the machine.';
      break;
  }

  return (
    <View style={styles.background}>
      <View style={styles.options}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.optionsText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tutorialCont}>
        <Image />
        <Text style={styles.title}></Text>
        <Text style={styles.descTxt}></Text>

        <View style={styles.checkboxesCont}>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
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
