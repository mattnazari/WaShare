import React, { useState, useEffect } from 'react';
import { Dimensions, ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/FooterStyles';
import { status } from '../styles/ThemeStyles';
import StatusMachine from './StatusMachine';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

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
    console.log('read userdata:', props.userdata)
    console.log('READ APP DATA', props.screenProps.data)
    ReadMachinesBooked()
    // var timenow = new Date();
    // var timebefore = new Date('2019-11-13 12:00:00');
    // console.log(timenow, timebefore, (Date.parse(timenow) - Date.parse(timebefore)) / 1000 / 60);
  }, [])

  let initialStatus;

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
          <Animatable.View key={index}
            animation='fadeInRight'
            easing='ease-in'
            duration={500}
            delay={index * 250}>
            <StatusMachine
              key={index}
              num={index}
              id={machine.id}
              add_time={machine.add_time}
              machine_id={machine.machine_id}
              start_time={machine.start_time}
              run_time={machine.run_time}
              is_added={machine.is_added}
              type={machine.machine_type}
              setCurrentTab={props.setCurrentTab}
              currentTab={props.currentTab}
              lockstate={machine.lockstate}
              ReadMachinesBooked={ReadMachinesBooked} />
          </Animatable.View>
        )}
      </ScrollView>
    )
  }

  //default page when no machines are in use
  else {
    initialStatus = (
      <View style={main.container}>
        <Image
          resizeMode='contain'
          style={{ width: 300, height: 300 }}
          source={require('../assets/Images/nostatus.png')} />
        <Animatable.View animation='fadeInUp' delay={1000} easing='ease-in'>
          <TouchableOpacity
            style={[styles.container, status.color, status.shadowColor]}
            onPress={() => {
              props.setCurrentTab('Book')
            }}>
            <Text style={styles.text}>Browse available machines</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, marginTop: -20 }}>
      {initialStatus}
    </View>
  )
}

export default Status;