import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/OnboardingStyles';

const Onboarding = props => {
  let mainImg = '';
  let mainTitle = '';
  let mainDesc = '';
  let mainButt = '';

  switch (props.onboardingName) {
    case 'firstOnboarding':
      mainImg = 'require("../assets/Images/OnboardingBook.png")';
      mainTitle = 'Book Machines Easily';
      mainDesc = 'Book washing machines or dryers';
      break;
    case 'secondOnboarding':
      mainImg = 'require("../assets/Images/OnboardingStatus.png")';
      mainTitle = 'Status';
      mainDesc =
        'Check how much time is remaining from your machine. Extend your machine if needed!';
      break;
    case 'thirdOnboarding':
      mainImg = 'require("../assets/Images/OnboardingNotify.png")';
      mainTitle = 'Notify Other Users';
      mainDesc =
        'Notify residents in your building when their laundry is ready to be picked up from the machine.';
      break;
    case 'fourthOnboarding':
      mainImg = 'require("../assets/Images/OnboardingReport.png")';
      mainTitle = 'Report Machines';
      mainDesc =
        'Notify residents in your building when their laundry is ready to be picked up from the machine.';
      break;
  }

  return (
    <View style={styles.background}>
      <View style={styles.skip}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.optionsText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tutorialCont}>
        <Image source={{mainImg}} />
        <Text style={styles.title}>{mainTitle}</Text>
        <Text style={styles.descTxt}>{mainDesc}</Text>
        <View style={styles.buttonsCont}>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              props.setOnboardingName('firstOnboarding');
            }}></TouchableOpacity>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              props.setOnboardingName('secondOnboarding');
            }}></TouchableOpacity>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              props.setOnboardingName('thirdOnboarding');
            }}></TouchableOpacity>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              props.setOnboardingName('fourthOnboarding');
            }}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.nextAndPrev}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.optionsText}>PREV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.optionsText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
