import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MachineStyles';

const Dryer = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        
      }}>
      <Text style={styles.machine}>Dryer {props.id}</Text>
      <Text style={styles.timeRemaining}>
        {props.minutes} minutes remaining
      </Text>
    </TouchableOpacity>
  )
}

export default Dryer;