import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Fontisto';
import axios from 'axios';
import ModalComp from './ModalComp';

const StatusMachine = props => {
  const timer = 10 * 60
  let machine;
  let num = props.machine_id;
  if(props.type == 'Dryer'){
    num = num - 4
  }

  const [cancelModalVisible, setCancelModalVisible] = useState(false)
  const [unlockModalVisible, setUnlockModalVisible] = useState(false)

  const DeleteMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_delete',
      data: {
        machine_id: props.machine_id
      }
    }
    var r = await axios.post('http://localhost:3001/post', obj)
    props.ReadMachinesBooked()
  }

  const UpdateMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_update',
      data: {
        id: props.id,
        lockstate: 1
      }
    }
    var r = await axios.post('http://localhost:3001/post', obj)
    props.ReadMachinesBooked()
  }

  if (props.lockstate === 0) {
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
            setUnlockModalVisible(!unlockModalVisible)
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
  else if (props.lockstate === 1){
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
          <Text style={styles.extendText}>ADD TIME</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ height: 450 }}>
      <ModalComp
        isVisible={cancelModalVisible}
        color={'red'}
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
      <ModalComp
        isVisible={unlockModalVisible}
        color={'purple'}
        onBackdropPress={() => {
          setUnlockModalVisible(!unlockModalVisible)
        }}
        onSwipeComplete={() => {
          setUnlockModalVisible(!unlockModalVisible)
        }}
        title={'Unlock this machine?'}
        desc={`Your card VISA 1 will be charged $5.00 immediately. Are you sure you want to unlock this machine?`}
        primaryonPress={() => {
          props.navigation.navigate('ModalScreen', {
            title: `${props.type} unlocked`,
            desc: 'Load your laundry and come back once your laundry is done!',
            image: require('../assets/Images/modalUnlock.png')
          })
          UpdateMachinesBooked()
          setUnlockModalVisible(!unlockModalVisible)
        }}
        primaryButton={'Yes, unlock it'}
        seconPress={() => {
          setUnlockModalVisible(!unlockModalVisible)
        }}
        secButton={'No'} />
      {machine}
    </View>
  )
}

export default withNavigation(StatusMachine);