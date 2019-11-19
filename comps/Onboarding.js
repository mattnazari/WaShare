import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/OnboardingStyles';
import * as Animatable from 'react-native-animatable';

const Onboarding = (props) => {
  let back = 'BACK'
  let next = 'NEXT'

  const [y, setY] = useState(0) //setting the initial state to the first object of the array, y = 0
  const onboardingArray = [
    {
      title: 'Easy booking',
      desc: 'Book washing machines or dryers with the touch of a button.',
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
      title: 'Notify others',
      desc: 'Notify residents in your building when their laundry is ready to be picked up from the machine.',
      img: require('../assets/Images/OnboardingNotify.png'),
      buttonStyle: styles.checkedButtons
    },
    {
      title: 'Report machines',
      desc: 'Let everyone know about machines that are out of service.',
      img: require('../assets/Images/OnboardingReport.png'),
      buttonStyle: styles.checkedButtons
    },
  ]

  if (y === 0) {
    back = null
  }
  if (y === 3) {
    next = 'START'
  }

  const [firstBut, setFirstBut] = useState(styles.checkedButtons)
  const [secondBut, setSecondBut] = useState(styles.uncheckedButtons)
  const [thirdBut, setThirdBut] = useState(styles.uncheckedButtons)
  const [fourthBut, setFourthBut] = useState(styles.uncheckedButtons)

  function SetButtonStyle(num) {
    if (num === 0) {
      setFirstBut(styles.checkedButtons)
      setSecondBut(styles.uncheckedButtons)
      setThirdBut(styles.uncheckedButtons)
      setFourthBut(styles.uncheckedButtons)
    }
    if (num === 1) {
      setFirstBut(styles.uncheckedButtons)
      setSecondBut(styles.checkedButtons)
      setThirdBut(styles.uncheckedButtons)
      setFourthBut(styles.uncheckedButtons)
    }
    if (num === 2) {
      setFirstBut(styles.uncheckedButtons)
      setSecondBut(styles.uncheckedButtons)
      setThirdBut(styles.checkedButtons)
      setFourthBut(styles.uncheckedButtons)
    }
    if (num === 3) {
      setFirstBut(styles.uncheckedButtons)
      setSecondBut(styles.uncheckedButtons)
      setThirdBut(styles.uncheckedButtons)
      setFourthBut(styles.checkedButtons)
    }
  }

  useEffect(() => {
    SetButtonStyle(y)
  }, [y])

  return (
    <View style={styles.background}>
      <Animatable.View
        animation='fadeIn'
        easing='ease-in'
        delay={1500}
        style={styles.skip}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            props.navigation.navigate('Login')
          }}>
          <Text style={styles.backText}>SKIP</Text>
        </TouchableOpacity>
      </Animatable.View>

      {
        //set as the property from the currently active state of the onboarding array,  ex: onboardingArray[y].img = require('../assets/Images/OnboardingBook.png')
      }
      <View style={styles.tutorialCont}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Animatable.Image animation='fadeIn' easing='ease-in' delay={500} style={styles.images} source={onboardingArray[y].img} />
          <Animatable.View
            animation='fadeIn'
            easing='ease-in'
            delay={750}>
            <Text style={styles.title}>{onboardingArray[y].title}</Text>
            <Text style={styles.descTxt}>{onboardingArray[y].desc}</Text>
          </Animatable.View>
        </View>
        <Animatable.View
          animation='fadeIn'
          easing='ease-in'
          delay={800}
          style={styles.buttonsCont}>
          <TouchableOpacity
            style={firstBut}
            onPress={() => {
              setY(0)
            }}>
          </TouchableOpacity>
          <TouchableOpacity
            style={secondBut}
            onPress={() => {
              setY(1)
            }}></TouchableOpacity>
          <TouchableOpacity
            style={thirdBut}
            onPress={() => {
              setY(2)
            }}></TouchableOpacity>
          <TouchableOpacity
            style={fourthBut}
            onPress={() => {
              setY(3)
            }}></TouchableOpacity>
        </Animatable.View>
      </View>

      <View style={styles.nextAndPrev}>
        <TouchableOpacity
          onPress={() => {
            if (y > 0) {
              setY(y - 1)
            } else {
              setY(0)
            }
          }}>
          <Animatable.Text animation='fadeIn' easing='ease-in' style={styles.backText}>{back}</Animatable.Text>
        </TouchableOpacity>
        <Animatable.View
          animation='fadeIn'
          easing='ease-in'
          delay={1000}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              if (y < 3) {
                setY(y + 1)
              } else {
                setY(3)
                props.navigation.navigate('Login')
              }
            }}>
            <Text style={[styles.nextText]}>{next}</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default Onboarding;
