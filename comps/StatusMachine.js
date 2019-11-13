import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

const StatusMachine = props => {
  const timer = 10 * 60
  let machine;

  let num = props.id;
  if (props.type == 'Dryer') {
    num = num - 4
  }

  const DeleteMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_delete',
      data: {
        machine_id: props.id
      }
    }
    var r = await axios.post('http://localhost:3001/post', obj)
  }

  if (props.lockState === true) {
    machine = (
      <View style={styles.container}>
        <Text style={styles.title}>{props.type} {num}</Text>
        <View style={styles.circle}>
          <Text style={styles.subText}>LOCKED</Text>
        </View>
        <View>
          <Text style={styles.subText}>Time left to unlock: {timer / 60} minutes</Text>
        </View>
        <TouchableOpacity
          style={styles.extendContainer}
          onPress={() => {
            props.navigation.navigate('ModalScreen', {
              title: `Machine ${props.id} unlocked`,
              desc: 'Load your laundry and come back once your laundry is done!',
              image: require('../assets/Images/modalUnlock.png')
            })
            props.setLockState(false)
          }}>
          <Text style={styles.extendText}>UNLOCK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelContainer}
          onPress={() => {
            props.setCurrentTab('Status')
            DeleteMachinesBooked()
          }}>
          <Text style={[styles.extendText, { color: '#6E41DA', fontFamily: 'CircularStd-Book' }]}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    )
  }
  else {
    machine = (
      <View style={styles.container}>
        <Text style={styles.title}>{props.type} {num}</Text>
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
          onPress={() => {
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