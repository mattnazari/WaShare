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
          if (props.name == 'Alert'){
            alert('Alert this user?')
          }
          if (props.name == 'Report'){
            alert('Report these machines?')
          }
         }}>
        <Text style={styles.text}>{props.name} selected machines</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;