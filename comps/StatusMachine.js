import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';
import axios from 'axios';
import ModalRed from './ModalRed';

const StatusMachine = props => {
  const timer = 10 * 60
  let machine;

  let num = props.id;
  if (props.type == 'Dryer') {
    num = num - 4
  }

  const [cancelModalVisible, setCancelModalVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const DeleteMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_delete',
      data: {
        machine_id: props.id
      }
    }
    var r = await axios.post('http://localhost:3001/post', obj)
    props.ReadMachinesBooked()
  }

  if (props.lockState === true) {
    machine = (
      <View style={styles.container}>
        <Text style={styles.title}>{props.type} {num}</Text>
        <View style={styles.circle}>
          <Icon name='locked' size={80} color='#6E41DA' />
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
            setCancelModalVisible(!cancelModalVisible)

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
      <ModalRed
        isVisible={cancelModalVisible}
        onBackdropPress={() => {
          setCancelModalVisible(!cancelModalVisible)
        }}
        onSwipeComplete={() => {
          setCancelModalVisible(!cancelModalVisible)
        }}
        title={'Cancel this machine?'}
        desc={`If you cancel this machine you'll have to book it again from the home screen. Are you sure you want to proceed?`}
        primaryonPress={() => {
          DeleteMachinesBooked()
          setCancelModalVisible(!cancelModalVisible)
        }}
        primaryButton={'Yes, cancel it'}
        seconPress={() => {
          setCancelModalVisible(!cancelModalVisible)
        }}
        secButton={'No, take me back'} />
      {machine}
    </View>
  )
}

export default withNavigation(StatusMachine);