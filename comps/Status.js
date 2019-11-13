import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/FooterStyles';
import { status } from '../styles/ThemeStyles';
import StatusMachine from './StatusMachine';
import axios from 'axios';

const main = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  scrollContainer: {
    padding: 24,
  },
})

const { width } = Dimensions.get('window');

const Status = props => {
  const [machinesBooked, setMachinesBooked] = useState([])

  const ReadMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_read',
      data: {}
    }

    let r = await axios.post('http://localhost:3001/post', obj)
    let dbmachinesbooked = JSON.parse(r.data.body)
    console.log('READING MACHINES BOOKED', dbmachinesbooked)
    setMachinesBooked(dbmachinesbooked.data)
  }

  useEffect(() => {
    ReadMachinesBooked()
    var timenow = new Date();
    var timebefore = new Date('2019-11-11 00:00:00');
    console.log(timenow, timebefore, (Date.parse(timenow) - Date.parse(timebefore))/1000/60);
  }, [])

  //default page when no machines are in use
  let initialStatus = (
    <View style={main.container}>
      <Image
        resizeMode='contain'
        style={{ width: 300, height: 300 }}
        source={require('../assets/Images/nostatus.png')} />
      <TouchableOpacity
        style={[styles.container, status.color, status.shadowColor]}
        onPress={() => {
          props.setCurrentTab('Book')
        }}>
        <Text style={styles.text}>Browse available machines</Text>
      </TouchableOpacity>
    </View>
  )

  if (machinesBooked.length >= 1) {
    initialStatus = (
      <ScrollView
        horizontal
        directionalLockEnabled
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        snapToAlignment={"start"}
        snapToInterval={width - 40 * 2}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={main.scrollContainer}>
        {machinesBooked.map((machine, index) =>
          <StatusMachine
            key={index}
            num={index}
            type={machine.machine_type}
            id={machine.machine_id}
            i={machine.id}
            setCurrentTab={props.setCurrentTab}
            lockstate={machine.lockstate}
            ReadMachinesBooked={ReadMachinesBooked} />
        )}
      </ScrollView>
    )
  }

  return (
    <View style={{ flex: 1, marginTop: -20 }}>
      {initialStatus}
    </View>
  )
}

export default Status;