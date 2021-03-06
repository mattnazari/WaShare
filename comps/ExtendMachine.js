import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import styles, { colors } from '../styles/StatusMachineStyles';
import ModalComp from './ModalComp';
import axios from 'axios';

const ExtendMachine = props => {
  let cost = 0.5;
  let increment = 8;
  let base = 8;

  //setting different increments depending on machine type
  if (props.navigation.getParam('type') == 'Washer') {
    base = 8
    increment = 8
    cost = 0.5
  }
  if (props.navigation.getParam('type') == 'Dryer') {
    increment = 30
    cost = 2.5
    base = 30
  }

  const time_finish = props.navigation.getParam('time_finish', new Date())

  const [addModalVisible, setAddModalVisible] = useState(false)

  const [extendCount, setExtendCount] = useState(base);
  const [finishTime, setFinishTime] = useState(new Date(time_finish.getTime() + increment * 60000));
  const [addCost, setAddCost] = useState(cost);

  const UpdateMachinesBooked = async () => {
    //... finish this function
    // UPDATE add_time column based on machine_id
    var obj = {
      key: 'machinesbooked_update',
      data: {
        id: props.navigation.getParam('id', null),
        add_time: extendCount * 60,
        is_added: 1
      }
    }
    var r = await axios.post('https://d3washare.herokuapp.com/post', obj)
  }

  return (
    <View style={{ flex: 1 }}>
      <ModalComp
        isVisible={addModalVisible}
        color={'purple'}
        onBackdropPress={() => {
          setAddModalVisible(!addModalVisible)
        }}
        onSwipeComplete={() => {
          setAddModalVisible(!addModalVisible)
        }}
        title={'Add extra time?'}
        desc={`Your card VISA 1 will be charged an extra $${addCost} immediately. Are you sure want to add an extra ${extendCount} minutes?`}
        primaryonPress={() => {
          UpdateMachinesBooked()
          props.navigation.goBack()
          props.navigation.navigate('ModalScreen', {
            title: 'Machine extended',
            desc: 'You have added ' + extendCount + ' minutes to this machine.',
            image: require('../assets/Images/modalExtend.png'),
          })
          setAddModalVisible(!addModalVisible)

        }}
        primaryButton={'Yes, add time.'}
        seconPress={() => {
          setAddModalVisible(!addModalVisible)
        }}
        secButton={'No, take me back'} />
      <Header currentTab={'Extend'} />
      <View style={{ padding: 24 }}>
        <Text style={extendstyles.subTitle}>How much time to add?</Text>
        <View style={extendstyles.container}>
          <TouchableOpacity
            style={extendstyles.countContainer}
            onPress={() => {
              if (extendCount !== 0) {
                setExtendCount(extendCount - increment)
                setFinishTime(new Date(finishTime.getTime() - increment * 60000))
                setAddCost(addCost - cost)
              }
            }}>
            <Text style={extendstyles.countText}>-</Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.mediumText}>{extendCount}</Text>
            <Text style={styles.subText}>minutes</Text>
          </View>
          <TouchableOpacity
            style={extendstyles.countContainer}
            onPress={() => {
              if (extendCount < 120) {
                setExtendCount(extendCount + increment)
                setFinishTime(new Date(finishTime.getTime() + increment * 60000))
                setAddCost(addCost + cost)
              }
            }}>
            <Text style={extendstyles.countText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={extendstyles.subTitle}>New machine details</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={extendstyles.container}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.subText}>Finish time</Text>
              <Text style={styles.mediumText}>{finishTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
            </View>
          </View>
          <View style={extendstyles.container}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.subText}>Additional Cost</Text>
              <Text style={styles.mediumText}>${addCost}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.extendContainer, { width: null, marginTop: 20 }]}
            onPress={() => {
              setAddModalVisible(!addModalVisible)
            }}>
            <Text style={styles.extendText}>ADD TIME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cancelContainer, { width: null, marginVertical: 24 }]}
            onPress={() => {
              props.navigation.goBack()
            }}>
            <Text style={[styles.extendText, { color: '#6E41DA', fontFamily: 'CircularStd-Book' }]}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default ExtendMachine;

const extendstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#FFF",
    padding: 24,
    marginVertical: 16,
    elevation: 16,
    shadowColor: "#506AFB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    borderRadius: 20,
  },
  subTitle: {
    fontFamily: 'CircularStd-Black',
    fontSize: 24,
    letterSpacing: -1.2,
    color: colors.dark
  },
  countContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.main,
    borderRadius: 10,
    elevation: 16,
    shadowColor: "#506AFB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.45,
    shadowRadius: 12
  },
  countText: {
    fontFamily: 'CircularStd-Black',
    fontSize: 48,
    color: '#FFF',
    textAlign: 'center',
    marginTop: -9
  },
})