import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/FooterStyles';

const Footer = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Book selected machines</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;