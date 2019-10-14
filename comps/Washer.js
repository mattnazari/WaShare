import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MachineStyles';

const Washer = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.setStatus(!props.status)
      }}>
      <Text style={styles.machine}>Washer {props.id}</Text>
      <Text style={styles.timeRemaining}>{props.statusText}</Text>
    </TouchableOpacity>
  )
}

export default Washer;