import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';
import { withNavigation } from 'react-navigation';

const StatusMachine = props => {
  const timer = 10*60
  let machine;

  if (props.lockState === true) {
    machine = (
      <View style={styles.container}>
        <Text style={styles.title}>{props.type} {props.id}</Text>
        <View style={styles.circle}>
          <Text style={styles.subText}>LOCKED</Text>
        </View>
        <View>
          <Text style={styles.subText}>Time left to unlock: {timer/60} minutes</Text>
        </View>
        <TouchableOpacity
          style={styles.extendContainer}
          onPress={() => {
            alert('Confirm unlock popup modal')
            props.setLockState(false)
          }}>
          <Text style={styles.extendText}>UNLOCK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelContainer}
          onPress={() => {
            props.setCurrentTab('Status')

            const find = props.booked.find(x => x.id === props.id)
            const index = props.booked.indexOf(find)

            props.spliceBooked(index)
            console.log(props.booked)
            alert('Need to re-render page to remove Machine that was removed from booked array')
          }}>
          <Text style={[styles.extendText, { color: '#6E41DA', fontFamily: 'CircularStd-Book' }]}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    )
  }
  else {
    machine = (
      <View style={styles.container}>
        <Text style={styles.title}>{props.type} {props.id}</Text>
        <View style={styles.circle}>
          <Text style={styles.largeText}>30</Text>
          <Text style={styles.subText}>minutes</Text>
          <Text style={styles.subText}>remaining</Text>
        </View>
        <View style={styles.finishContainer}>
          <Text style={styles.subText}>Finish time</Text>
          <Text style={styles.mediumText}>9:56am</Text>
        </View>
        <TouchableOpacity
          style={styles.extendContainer}
          onPress={() =>{
            props.navigation.navigate('ExtendMachine')
          }}>
          <Text style={styles.extendText}>EXTEND</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ height: 450 }}>
      {machine}
    </View>
  )
}

export default withNavigation(StatusMachine);