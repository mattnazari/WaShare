import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Washer from './Washer';
import styles from '../styles/MachineStyles';

const WasherMachines = () => {
  let id = 1; //give each machine a unique id
  const [minutes, setMinutes] = useState(0);

  return (
    <View>
      <Text style={styles.title}>Washer machines</Text>
      <ScrollView
        horizontal
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <Washer id={id++} minutes={minutes} />
        <Washer id={id++} minutes={minutes} />
        <Washer id={id++} minutes={minutes} />
        <Washer id={id++} minutes={minutes} />
        <Washer id={id++} minutes={minutes} />
        <Washer id={id++} minutes={minutes} />
      </ScrollView>
    </View>
  )
}

export default WasherMachines;