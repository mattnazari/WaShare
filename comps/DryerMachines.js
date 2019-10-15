import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Dryer from './Dryer';
import styles from '../styles/MachineStyles';

const DryerMachines = props => {
  let id = 1; //give each machine a unique id

  return (
    <View>
      <Text style={styles.title}>Dryer machines</Text>
      <ScrollView
        horizontal
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <Dryer id={id++} name={props.name} />
        <Dryer id={id++} name={props.name} />
        <Dryer id={id++} name={props.name} />
        <Dryer id={id++} name={props.name} />
        <Dryer id={id++} name={props.name} />
        <Dryer id={id++} name={props.name} />
      </ScrollView>
    </View>
  )
}

export default DryerMachines;