import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Dryer from './Dryer';
import styles from '../styles/MachineStyles';

const DryerMachines = () => {
  let id = 1; //give each machine a unique id
  const [minutes, setMinutes] = useState(0);

  return (
    <View>
      <Text style={styles.title}>Dryer machines</Text>
      <ScrollView
        horizontal
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <Dryer id={id++} minutes={minutes} />
        <Dryer id={id++} minutes={minutes} />
        <Dryer id={id++} minutes={minutes} />
        <Dryer id={id++} minutes={minutes} />
        <Dryer id={id++} minutes={minutes} />
        <Dryer id={id++} minutes={minutes} />
      </ScrollView>
    </View>
  )
}

export default DryerMachines;