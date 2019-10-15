import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Washer from './Washer';
import styles from '../styles/MachineStyles';

const WasherMachines = props => {
  return (
    <View>
      <Text style={styles.title}>Washer machines</Text>
      <ScrollView
        horizontal
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {props.id.map((item) => <Washer key={item.id} id={item.id} name={props.name} selected={props.selected} />)}
      </ScrollView>
    </View>
  )
}

export default WasherMachines;