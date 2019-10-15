import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Machine from './Machine';
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
        <Machine id={id++} name={props.name} type={props.type} />
        <Machine id={id++} name={props.name} type={props.type} />
        <Machine id={id++} name={props.name} type={props.type} />
        <Machine id={id++} name={props.name} type={props.type} />
        <Machine id={id++} name={props.name} type={props.type} />
        <Machine id={id++} name={props.name} type={props.type} />
      </ScrollView>
    </View>
  )
}

export default DryerMachines;