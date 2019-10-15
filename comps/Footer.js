import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/FooterStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Footer = (props) => {
  let themeName = '';

  switch (props.name) {
    case 'Book':
      themeName = book
      break;
    case 'Status':
      themeName = status
      break;
    case 'Notify':
      themeName = notify
  }

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, themeName.color]}
        onPress={() => {
          if (props.name == 'Book') {
            alert('Bring me to the booking page')
          }
          if (props.name == 'Status') {
            alert('Open status page')
          }
          if (props.name == 'Notify') {
            alert('Notify users?')
          }
        }}>
        <Text style={styles.text}>{props.name} selected machines</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;