import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HeaderStyles';
import { book, status, notify } from '../styles/ThemeStyles';
import * as icon from './SVGComps';

//dimension for icons in header (ham menu, notifications, help)
const iconDim = 20

const Header = props => {
  let title = '';
  let description = '';
  let themeName = '';

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
  }

  const [leftIcon, setLeftIcon] = React.useState(
    <TouchableOpacity
      onPress={() => {
        alert('Open ham menu')
      }}>
      <icon.HamMenu fill={'white'} height={iconDim} width={iconDim} />
    </TouchableOpacity>
  );

  if (props.currentTab == 'Extend') {
    setLeftIcon(
      <TouchableOpacity
        onPress={() => {
          alert('Go back')
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
                alert('Navigate to notification page')
              }}>
              <icon.Notifications fill={'white'} height={iconDim} width={iconDim} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleDesc}>{description}</Text>
      </View>
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
    </View>
  )
}

export default Header;