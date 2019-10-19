import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/FooterStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Footer = (props) => {
  let themeName = '';

  switch (props.currentTab) {
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
          if (props.currentTab == 'Book') {
            props.bookMachines(props.selected)
            if (props.selected.length == 0) {
              alert('You have no machines selected!')
            } else {
              props.setCurrentTab('Status')
            }
          }
          if (props.currentTab == 'Status') {
            alert('Open status page')
          }
          if (props.currentTab == 'Notify') {
            alert(props.selected)
          }
        }}>
        <Text style={styles.text}>{props.currentTab} selected machines</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;