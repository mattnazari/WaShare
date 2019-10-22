import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/OnboardingStyles';

const Onboarding = (props) => {
  const [y, setY] = useState(0) //setting the initial state to the first object of the array, y = 0
  const onboardingArray = [
    {
      title: 'Book Machines Easily',
      desc: 'Book washing machines or dryers',
      img: require('../assets/Images/OnboardingBook.png'),
      buttonStyle: styles.checkedButtons
    },
    {
      title: 'Status',
      desc: 'Check how much time is remaining from your machine. Extend your machine if needed!',
      img: require('../assets/Images/OnboardingStatus.png'),
      buttonStyle: styles.checkedButtons
    },
    {
      title: 'Notify Other Users',
      desc: 'Notify residents in your building when their laundry is ready to be picked up from the machine.',
      img: require('../assets/Images/OnboardingNotify.png'),
      buttonStyle: styles.checkedButtons
    },
    {
      title: 'Report Machines',
      desc: 'Let everyone know about machines that are out of service.',
      img: require('../assets/Images/OnboardingReport.png'),
      buttonStyle: styles.checkedButtons
    },
  ]

  return (
    <View style={styles.background}>
      <View style={styles.skip}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            props.navigation.navigate('Main')
          }}
        >
          <Text style={styles.optionsText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {
        //set as the property from the currently active state of the onboarding array,  ex: onboardingArray[y].img = require('../assets/Images/OnboardingBook.png')
      }
      <View style={styles.tutorialCont}>
        <Image style={styles.images} source={onboardingArray[y].img} />
        <Text style={styles.title}>{onboardingArray[y].title}</Text>
        <View style={styles.descTxtCont}>
          <Text style={styles.descTxt}>{onboardingArray[y].desc}</Text>
        </View>
        <View style={styles.buttonsCont}>
          <TouchableOpacity
            style={onboardingArray[y].buttonStyle}
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
              props.navigation.navigate('Main')
            }
          }}>
          <Text style={styles.optionsText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
