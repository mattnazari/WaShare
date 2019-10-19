import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/OnboardingStyles';

const Onboarding = props => {
  /*let mainImg = '';
  let mainTitle = '';
  let mainDesc = '';
  let mainButt = '';*/

  const [y, setY] = useState(0) //setting the initial state to the first object of the array, y = 0
  const onboardingArray = [
    {
      title: 'Book Machines Easily',
      desc: 'Book washing machines or dryers',
      img: require('../assets/Images/onboardingBook.png')
    },
    {
      title: 'Status',
      desc: 'Check how much time is remaining from your machine. Extend your machine if needed!',
      img: require('../assets/Images/onboardingStatus.png')
    },
    {
      title: 'Notify Other Users',
      desc: 'Notify residents in your building when their laundry is ready to be picked up from the machine.',
      img: require('../assets/Images/onboardingNotify.png')
    },
    {
      title: 'Report Machines',
      desc: 'Let everyone know about machines that are out of service.',
      img: require('../assets/Images/onboardingReport.png')
    },
  ]

  /*
  switch (props.onboardingName) {
    case 'firstOnboarding':
      mainImg = require('../assets/Images/OnboardingBook.png');
      mainTitle = 'Book Machines Easily';
      mainDesc = 'Book washing machines or dryers';
      break;
    case 'secondOnboarding':
      mainImg = require("../assets/Images/OnboardingStatus.png");
      mainTitle = 'Status';
      mainDesc =
        'Check how much time is remaining from your machine. Extend your machine if needed!';
      break;
    case 'thirdOnboarding':
      mainImg = require("../assets/Images/OnboardingNotify.png");
      mainTitle = 'Notify Other Users';
      mainDesc =
        'Notify residents in your building when their laundry is ready to be picked up from the machine.';
      break;
    case 'fourthOnboarding':
      mainImg = require("../assets/Images/onboardingReport.png");
      mainTitle = 'Report Machines';
      mainDesc =
        'Notify residents in your building when their laundry is ready to be picked up from the machine.';
      break;
  }*/

  return (
    <View style={styles.background}>
      <View style={styles.skip}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.optionsText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {
        //set as the property from the currently active state of the onboarding array,  ex: onboardingArray[y].img = require('../assets/Images/OnboardingBook.png')
      }
      <View style={styles.tutorialCont}>
        <Image source={onboardingArray[y].img} />
        <Text style={styles.title}>{onboardingArray[y].title}</Text>
        <View style={styles.descTxtCont}>
        <Text style={styles.descTxt}>{onboardingArray[y].desc}</Text>
        </View>
        <View style={styles.buttonsCont}>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              setY(0)
            }}>
            </TouchableOpacity>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              setY(1)
            }}></TouchableOpacity>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              setY(2)
            }}></TouchableOpacity>
          <TouchableOpacity
            style={styles.uncheckedButtons}
            onPress={() => {
              setY(3)
            }}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.nextAndPrev}>
        <TouchableOpacity style={styles.buttons}
          onPress={() => {
            if (y > 0) {
              setY(y - 1)
            } else {
              setY(0)
            }
          }}>
          <Text style={styles.optionsText}>PREV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}
          onPress={() => {
            if (y < 3) {
              setY(y + 1)
            } else {
              setY(3)
            }
          }}>
          <Text style={styles.optionsText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
