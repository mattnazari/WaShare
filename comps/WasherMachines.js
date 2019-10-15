import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Washer from './Washer';
import styles from '../styles/MachineStyles';

const WasherMachines = props => {
  let id = 1; //give each machine a unique id

  return (
    <View>
      <Text style={styles.title}>Washer machines</Text>
      <ScrollView
        horizontal
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <Washer id={id++} name={props.name} />
        <Washer id={id++} name={props.name} />
        <Washer id={id++} name={props.name} />
        <Washer id={id++} name={props.name} />
        <Washer id={id++} name={props.name} />
        <Washer id={id++} name={props.name} />
        <Washer id={id++} name={props.name} />
      </ScrollView>
    </View>
  )
}

export default WasherMachines;