import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HeaderStyles';
import { book, status, notify } from '../styles/ThemeStyles';
import * as icon from './SVGComps';
import { withNavigation } from 'react-navigation';

//dimension for icons in header (ham menu, notifications, help)
const iconDim = 20

const Header = (props) => {
  //should actually rewrite this to use useState hooks
  let title = '';
  let description = '';
  let themeName = '';

  //DEFAULT tab bar with book, status, notify
  let tabBar = (
    <View style={styles.barContainer}>
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => {
          props.setCurrentTab('Book')
          props.setSelected([])
          console.log(props.selected)
        }}>
        <Text style={styles.text}>BOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => {
          props.setCurrentTab('Status')
          props.setSelected([])
          console.log(props.selected)
        }}>
        <Text style={styles.text}>STATUS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => {
          props.setCurrentTab('Notify')
          props.setSelected([])
          console.log(props.selected)
        }}>
        <Text style={styles.text}>NOTIFY</Text>
      </TouchableOpacity>
    </View>
  );

  let paymentTabBar = (
    <View style={styles.paymentBarContainer}>
      <TouchableOpacity>
        <Text style={styles.text}>Payment Date</Text>
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
      break;
    case 'Status':
      title = 'Machine status'
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
      title = 'Add time to your machines'
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

  return (
    <View>
      <View style={[styles.titleContainer, themeName.color]}>
        <View style={styles.iconBar}>
          <View style={{ justifyContent: 'flex-start' }}>
            {leftIcon}
          </View>
          <View style={styles.iconBarRight}>
            <TouchableOpacity
              onPress={() => {
                alert('Open help modal')
              }}>
              <icon.Help fill={'white'} height={iconDim} width={iconDim} />
            </TouchableOpacity>
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