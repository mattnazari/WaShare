import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';
import styles, { colors } from '../styles/StatusMachineStyles';

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

const ExtendMachine = props => {
  let cost = 0.5;
  let increment = 8;
  let base = 8;

  //setting different increments depending on machine type
  if (props.type == 'Washer') {
    base = 8
    increment = 8
    cost = 0.5
  }
  if (props.type == 'Dryer') {
    increment = 30
    cost = 2.5
    base = 30
  }

  const [extendCount, setExtendCount] = useState(base);
  const [finishTime, setFinishTime] = useState(base);
  const [addCost, setAddCost] = useState(cost);

  return (
    <View style={{ flex: 1 }}>
      <Header currentTab={'Extend'} />
      <View style={{ padding: 24 }}>
        <Text style={extendstyles.subTitle}>How much time to add?</Text>
        <View style={extendstyles.container}>
          <TouchableOpacity
            style={extendstyles.countContainer}
            onPress={() => {
              setExtendCount(extendCount - increment)
              setFinishTime(finishTime - increment)
              setAddCost(addCost - cost)
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
              setExtendCount(extendCount + increment)
              setFinishTime(finishTime + increment)
              setAddCost(addCost + cost)
            }}>
            <Text style={extendstyles.countText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={extendstyles.subTitle}>New machine details</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={extendstyles.container}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.subText}>Finish time</Text>
              <Text style={styles.mediumText}>{finishTime}</Text>
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
              props.navigation.goBack()

              {//need rest of interaction here to update machine booked time
              }

              alert('Extend interaction, needs rest of functionality built')
            }}>
            <Text style={styles.extendText}>EXTEND</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cancelContainer, { width: null, marginVertical: 24 }]}
            onPress={() => {
              props.navigation.goBack()
              alert('Cancelled the extend interaction, replace this with nicer modal')
            }}>
            <Text style={[styles.extendText, { color: '#6E41DA' }]}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ExtendMachine;