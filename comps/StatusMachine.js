import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/StatusMachineStyles';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Fontisto';
import axios from 'axios';
import ModalComp from './ModalComp';
import LottieView from 'lottie-react-native';

const StatusMachine = props => {
  const timer = 10 * 60
  let machine;
  let default_time;
  let num = props.machine_id;
  if (props.type == 'Dryer') {
    default_time = 60
    num = num - 3
  } else if (props.type == 'Washer') {
    default_time = 30
  }

  const [runTime, setRunTime] = useState(props.run_time)
  const addTime = props.add_time
  const count = runTime + addTime
  const [startCountdown, setStartCountdown] = useState(false)

  const time_db = new Date(props.start_time.replace(' ', 'T'))
  const time_finish = new Date(time_db.getTime() + (count/60) * 60000);
  // pretty sure these are not needed
  // const time_now = new Date()
  // const parsed = (Date.parse(time_now) - Date.parse(time_db)) / 1000 / 60

  const [cancelModalVisible, setCancelModalVisible] = useState(false)
  const [unlockModalVisible, setUnlockModalVisible] = useState(false)

  const UpdateMachinesStatus = async () => {
    var obj = {
      key: 'machines_update',
      data: {
        id: props.machine_id,
        status: 0
      }
    }
    var r = await axios.post('https://d3washare.herokuapp.com/post', obj)
  }

  const DeleteMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_delete',
      data: {
        machine_id: props.machine_id
      }
    }
    var r = await axios.post('https://d3washare.herokuapp.com/post', obj)
    props.ReadMachinesBooked()
    UpdateMachinesStatus()
  }

  const UpdateMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_update',
      data: {
        id: props.id,
        lockstate: 1,
      }
    }
    var r = await axios.post('https://d3washare.herokuapp.com/post', obj)
    props.ReadMachinesBooked()
  }

  const UpdateRunTime = async () => {
    var obj = {
      key: 'machinesbooked_update',
      data: {
        id: props.id,
        run_time: runTime
      }
    }
    var r = await axios.post('https://d3washare.herokuapp.com/post', obj)
    props.ReadMachinesBooked()
  }

  useEffect(() => {
    if (startCountdown) {
      if (count === 0) {
        console.log(props.type, num, 'has finished running!')

        props.navigation.navigate('ModalScreen', {
          title: `Your ${props.type} has finished it's cycle`,
          desc: 'Please collect your laundry so that the next person can use the machine!',
          image: require('../assets/Images/modalDone.png'),
        })
        DeleteMachinesBooked()

        return;
      }
      const interval = setTimeout(() => {
        setRunTime((runTime) - 1);
        console.log(props.type, num, 'time remaining in seconds', count)
        UpdateRunTime()
      }, 1000);
      return () => clearTimeout(interval);
    }
  }), [runTime];

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
  else if (props.lockstate === 1) {

    let button;
    if (props.is_added !== 1) {
      button = <TouchableOpacity
        style={styles.extendContainer}
        onPress={() => {
          props.navigation.navigate('ExtendMachine', { id: props.id, type: props.type, time_finish: time_finish })
        }}>
        <Text style={styles.extendText}>ADD TIME</Text>
      </TouchableOpacity>
    } else {
      //write here to display button if a machine has already added time to it
      button = null
    }

    let time;
    if (count >= 60) {
      time = <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.largeText}>{Math.round(count / 60)}</Text>
        <Text style={styles.subText}>minutes</Text>
        <Text style={styles.subText}>remaining</Text>
      </View>
    } else {
      time = <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.largeText}>{count}</Text>
        <Text style={styles.subText}>seconds</Text>
        <Text style={styles.subText}>remaining</Text>
      </View>
    }
    machine = (
      <View style={styles.container}>
        <Text style={styles.title}>{props.type} {num}</Text>
        <LottieView source={require('../assets/spinner.json')} autoPlay loop />
        <View style={{ marginVertical: 58 }}>{time}</View>
        <View style={styles.finishContainer}>
          <Text style={styles.subText}>Finish time</Text>
          <Text style={styles.mediumText}>{time_finish.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
        </View>
        {button}
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
          setStartCountdown(!startCountdown)
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