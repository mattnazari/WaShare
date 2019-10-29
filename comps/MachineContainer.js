import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Machine from './Machine';
import styles from '../styles/MachineStyles';

const MachineContainer = props => {
  return (
    <View>
      <Text style={styles.title}>{props.type} machines</Text>
      <View style={{ marginTop: -20 }}>
        <ScrollView
          horizontal
          directionalLockEnabled
          decelerationRate={0}
          snapToAlignment={"start"}
          snapToInterval={130}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {props.machines.map((machine) =>
            <Machine key={machine.id}
              id={machine.id}
              type={machine.type}
              lock={machine.lock}
              currentTab={props.currentTab}
              selected={props.selected}
              pushSelect={props.pushSelect}
              spliceSelect={props.spliceSelect}
              machineAvailability={props.machineAvailability} />)}
        </ScrollView>
      </View>
    </View>
  )
}

export default MachineContainer;