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
        style={[styles.container, themeName.color, themeName.shadowColor]}
        onPress={() => {
          if (props.name == 'Book') {
            props.bookMachines(props.selected)
          }
          if (props.name == 'Status') {
            alert('Open status page')
          }
          if (props.name == 'Notify') {
            alert(props.selected)
          }
        }}>
        <Text style={styles.text}>{props.name} selected machines</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;