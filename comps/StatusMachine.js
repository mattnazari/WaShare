import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';

const StatusMachine = props => {
  const locked = (
    <View style={styles.container}>
      <Text style={styles.title}>{props.type} {props.id}</Text>
      <View style={styles.circle}>
        <Text style={styles.subText}>LOCKED</Text>
      </View>
      <View>
        <Text style={styles.subText}>Time left to unlock: 10 minutes</Text>
      </View>
      <TouchableOpacity
        style={styles.extendContainer}
        onPress={() => {
          alert('Confirm unlock popup modal')
          setMachine(unlocked)
        }}>
        <Text style={styles.extendText}>UNLOCK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelContainer}
        onPress={() => {
          const find = props.booked.find(x => x.id === props.id)
          const index = props.booked.indexOf(find)
          
          props.spliceBooked(index)
          console.log(props.booked)
          alert('Need to re-render page to remove Machine that was removed from booked array')
        }}>
        <Text style={[styles.extendText, { color: '#6E41DA' }]}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  )

  const unlocked = (
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
        style={styles.extendContainer}>
        <Text style={styles.extendText}>EXTEND</Text>
      </TouchableOpacity>
    </View>
  )

  const [machine, setMachine] = React.useState(locked)

  return (
    <View style={{ height: 450 }}>
      {machine}
    </View>
  )
}

export default StatusMachine;