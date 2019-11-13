import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Fontisto';
import Modal from 'react-native-modal';
import axios from 'axios';

const StatusMachine = props => {
  const timer = 10 * 60
  let machine;

  let num = props.id;
  if (props.type == 'Dryer') {
    num = num - 4
  }

  const [modalVisible, setModalVisible] = useState(false)

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
            setModalVisible(!modalVisible)

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
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => {
          setModalVisible(!modalVisible)
        }}
        onSwipeComplete={() => {
          setModalVisible(!modalVisible)
        }}
        swipeDirection={['up', 'down', 'left', 'right']}>
        <SafeAreaView style={{ padding: 20, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
          <Text style={{ padding: 20, textAlign: 'center' }}>Are you sure you want to cancel this machine?</Text>
          <TouchableOpacity
            onPress={() => {
              DeleteMachinesBooked()
              setModalVisible(!modalVisible)
            }}>
            <Text style={{ padding: 20 }}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible)
            }}>
            <Text style={{ padding: 20 }}>NO</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
      {machine}
    </View>
  )
}

export default withNavigation(StatusMachine);