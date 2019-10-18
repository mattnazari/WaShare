import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Machine from './Machine';
import styles from '../styles/MachineStyles';

const MachineContainer = props => {
  return (
    <View>
      <Text style={styles.title}>{props.type} machines</Text>
      <ScrollView
        horizontal
        directionalLockEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {props.id.map((item) =>
          <Machine key={item.id}
            id={item.id}
            type={props.type}
            name={props.name} 
            selected={props.selected}
            pushSelect={props.pushSelect}
            spliceSelect={props.spliceSelect} />)}
      </ScrollView>
    </View>
  )
}

export default MachineContainer;