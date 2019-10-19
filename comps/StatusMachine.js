import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';

const StatusMachine = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.type} {props.id}</Text>
      <View style={styles.circle}>
        <Text style={styles.largeText}>30</Text>
        <Text style={styles.subText}>minutes</Text>
        <Text style={styles.subText}>remaining</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.subText}>Finish time</Text>
        <Text style={styles.mediumText}>9:56am</Text>
      </View>
      <TouchableOpacity
        style={styles.extendContainer}>
        <Text style={styles.extendText}>EXTEND</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StatusMachine;