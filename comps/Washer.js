import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/WasherStyles';

const Washer = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        
      }}>
      <Text style={styles.washerId}>Washer {props.id}</Text>
      <Text style={styles.timeRemaining}>
        {props.minutes} minutes remaining
      </Text>
    </TouchableOpacity>
  )
}

export default Washer;