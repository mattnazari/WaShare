import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Washer from './Washer';
import styles from '../styles/MachineStyles';

const WasherMachines = () => {
  let id = 1; //give each machine a unique id
  let statusText = '';

  const [status, setStatus] = useState(true);
  if (status === true) {
    statusText = 'Available'
  }
  if (status === false) {
    statusText = 'Unavailable'
  }

  return (
    <View>
      <Text style={styles.title}>Washer machines</Text>
      <ScrollView
        horizontal
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <Washer id={id++} status={status} setStatus={setStatus} statusText={statusText} />
        <Washer id={id++} status={status} setStatus={setStatus} statusText={statusText} />
        <Washer id={id++} status={status} setStatus={setStatus} statusText={statusText} />
        <Washer id={id++} status={status} setStatus={setStatus} statusText={statusText} />
        <Washer id={id++} status={status} setStatus={setStatus} statusText={statusText} />
        <Washer id={id++} status={status} setStatus={setStatus} statusText={statusText} />
      </ScrollView>
    </View>
  )
}

export default WasherMachines;