import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HeaderStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Header = props => {
  let title = '';
  let description = '';
  let themeName = '';

  switch (props.name) {
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

  return (
    <View>
      <View style={[styles.titleContainer, themeName.color]}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleDesc}>{description}</Text>
      </View>
      <View style={styles.barContainer}>
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => {
            props.setName('Book')
          }}>
          <Text style={styles.text}>BOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => {
            props.setName('Status')
          }}>
          <Text style={styles.text}>STATUS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => {
            props.setName('Notify')
          }}>
          <Text style={styles.text}>NOTIFY</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header;