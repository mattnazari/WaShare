import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/FooterStyles';

const Footer = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          if (props.name == 'Book'){
            alert('Bring me to the booking page')
          }
          if (props.name == 'Status'){
            alert('Open status page')
          }
          if (props.name == 'Notify'){
            alert('Notify users?')
          }
         }}>
        <Text style={styles.text}>{props.name} selected machines</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;