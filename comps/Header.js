import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import styles from '../styles/HeaderStyles';
import { book, status, notify } from '../styles/ThemeStyles';
import * as icon from './SVGComps';
import { withNavigation } from 'react-navigation';
import Modal from 'react-native-modal';
import Machine from './Machine';
import * as Animatable from 'react-native-animatable';

//dimension for icons in header (ham menu, notifications, help)
const iconDim = 20

const Header = (props) => {
  let title = '';
  let description = '';
  let themeName = '';
  let helpButton = null;

  const [bookTextStyle, setBookTextStyle] = useState(styles.text)
  const [statusTextStyle, setStatusTextStyle] = useState(styles.text)
  const [notifyTextStyle, setNotifyTextStyle] = useState(styles.text)

  function DetermineTab(tab) {
    if (tab == 'Book') {
      setBookTextStyle(styles.activeText)
      setStatusTextStyle(styles.text)
      setNotifyTextStyle(styles.text)
    }
    if (tab == 'Status') {
      setBookTextStyle(styles.text)
      setStatusTextStyle(styles.activeText)
      setNotifyTextStyle(styles.text)
    }
    if (tab == 'Notify') {
      setBookTextStyle(styles.text)
      setStatusTextStyle(styles.text)
      setNotifyTextStyle(styles.activeText)
    }
  }

  useEffect(() => {
    DetermineTab(props.currentTab)
  }, [props.currentTab])

  //DEFAULT tab bar with book, status, notify
  let tabBar = (
    <View style={styles.barContainer}>
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => {
          props.setCurrentTab('Book')
          props.setSelected([])
        }}>
        <Text style={bookTextStyle}>BOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => {
          props.setCurrentTab('Status')
          props.setSelected([])
        }}>
        <Text style={statusTextStyle}>MY MACHINES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => {
          props.setCurrentTab('Notify')
          props.setSelected([])
        }}>
        <Text style={notifyTextStyle}>NOTIFY USERS</Text>
      </TouchableOpacity>
    </View>
  );

  let paymentTabBar = (
    <View style={styles.paymentBarContainer}>
      <TouchableOpacity>
        <Text style={styles.paymentActiveText}>Payment Information</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Payment History</Text>
      </TouchableOpacity>
    </View>
  );

  switch (props.currentTab) {
    case 'Book':
      title = 'Book your machines'
      description = 'Tap on a machine to select a machine for booking. You can select multiple machines at once.'
      themeName = book
      helpButton = (
        <TouchableOpacity
          onPress={() => {
            setHelpModalVisible(!helpModalVisible)
          }}>
          <icon.Help fill={'white'} height={iconDim} width={iconDim} />
        </TouchableOpacity>
      )
      break;
    case 'Status':
      title = 'My machines'
      description = 'View the status of all your booked machines. If you have no machines, check the book tab to get started.'
      themeName = status
      break;
    case 'Notify':
      title = 'Notify users'
      description = 'Notify users by tapping on a machine. This gives them a notification that their laundry is finished.'
      themeName = notify
      break;
    case 'Notifications':
      title = 'Notifications'
      description = 'View all your recent notifications here. You can also send other users notifications in the notify tab.'
      themeName = book
      tabBar = null;
      break;
    case 'Extend':
      title = 'Add time to your machine'
      description = 'You can add time to the length you booked your machine for. Maximum extra time is 2 hours.'
      themeName = status
      tabBar = null;
      break;
    case 'Payment':
      title = 'Payment Information'
      tabBar = paymentTabBar
      themeName = book
      break;
    case 'Report':
      title = 'Report machines'
      description = 'You can report machines that are broken or are out of service. Machine companies will be contacted directly.'
      themeName = book
      tabBar = null;
  }

  //default state for the left icon is hamburger icon
  let leftIcon = (
    <TouchableOpacity
      onPress={() => {
        props.navigation.toggleDrawer()
      }}>
      <icon.HamMenu fill={'white'} height={iconDim} width={iconDim} />
    </TouchableOpacity>
  );

  if (props.currentTab == 'Extend' || props.currentTab == 'Notifications') {
    leftIcon = (
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack()
        }}>
        <icon.Back fill={'white'} height={iconDim} width={iconDim} />
      </TouchableOpacity>
    )
  }

  const [helpModalVisible, setHelpModalVisible] = useState(false)

  return (
    <View>

      <Modal
        isVisible={helpModalVisible}
        onBackdropPress={() => {
          setHelpModalVisible(!helpModalVisible)
        }}
        onSwipeComplete={() => {
          setHelpModalVisible(!helpModalVisible)
        }}
        swipeDirection={['up', 'down', 'left', 'right']}>
        <SafeAreaView style={modalstyles.container}>
          <Text style={modalstyles.primaryTitle}>Need some help?</Text>
          <Text style={modalstyles.primaryText}>First, tap on a machine to select it.</Text>
          <Animatable.View animation='bounce' easing="ease-in" delay={200} iterationCount="infinite">
            <Machine
              id={0}
              num={0}
              type={'Washer'}
              status={0}
              currentTab={'Book'}
              selected={props.selected}
              pushSelect={() => { }}
              spliceSelect={() => { }} />
          </Animatable.View>
          <Text style={modalstyles.primaryText}>Then, press the book button at the bottom of the screen to book it.</Text>
          <TouchableOpacity
            style={[modalstyles.primaryButton, modalstyles.primaryButtonBlue]}
            onPress={() => {
              setHelpModalVisible(!helpModalVisible)
            }}>
            <Text style={modalstyles.primaryButtonText}>Got it!</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      <View style={[styles.titleContainer, themeName.color]}>
        <View style={styles.iconBar}>
          <View style={{ justifyContent: 'flex-start' }}>
            {leftIcon}
          </View>
          <View style={styles.iconBarRight}>
            {helpButton}
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => {
                props.navigation.navigate('Notification')
              }}>
              <icon.Notifications fill={'white'} height={iconDim} width={iconDim} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleDesc}>{description}</Text>
      </View>
      {tabBar}
    </View>
  )
}

export default withNavigation(Header);

const modalstyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  primaryText: {
    color: '#636266',
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    letterSpacing: -0.4,
    padding: 12,
    margin: 12,
    textAlign: 'center'
  },
  primaryTitle: {
    color: '#181721',
    fontFamily: 'CircularStd-Medium',
    fontSize: 24,
    letterSpacing: -0.6,
    paddingTop: 12,
    paddingHorizontal: 12,
    marginTop: 24,
    textAlign: 'center'
  },
  primaryButton: {
    padding: 16,
    marginHorizontal: 100,
    marginTop: 12,
    marginBottom: 32,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0284F',
    borderRadius: 4,
    elevation: 16,
    shadowColor: "#FF88A1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 6
  },
  primaryButtonRed: {
    backgroundColor: '#E0284F',
    shadowColor: "#FF88A1",
  },
  primaryButtonPurple: {
    backgroundColor: '#6E41DA',
    shadowColor: "#506AFB",
  },
  primaryButtonLightPurple: {
    backgroundColor: '#7E33B8',
    shadowColor: "#7E33B8",
  },
  primaryButtonBlue: {
    backgroundColor: '#506BFB',
    shadowColor: "#506AFB",
  },
  primaryButtonText: {
    fontFamily: 'CircularStd-Book',
    color: 'white'
  },
})