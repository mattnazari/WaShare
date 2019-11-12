import React, { useEffect } from 'react';
import { Dimensions, ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/FooterStyles';
import { status } from '../styles/ThemeStyles';
import StatusMachine from './StatusMachine';

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

  if (props.booked.length >= 1) {
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
        {props.booked.map((machine, index) =>
          <StatusMachine
            key={index}
            num={index}
            type={machine.type}
            id={machine.id}
            lock={machine.lock}
            booked={props.booked}
            spliceBooked={props.spliceBooked}
            setCurrentTab={props.setCurrentTab}
            lockState={props.lockState}
            setLockState={props.setLockState} />
        )}
      </ScrollView>
    )
  }

  useEffect(() => {
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
        {props.booked.map((machine, index) =>
          <StatusMachine
            key={index}
            num={index}
            type={machine.type}
            id={machine.id}
            lock={machine.lock}
            booked={props.booked}
            spliceBooked={props.spliceBooked}
            setCurrentTab={props.setCurrentTab}
            lockState={props.lockState}
            setLockState={props.setLockState} />
        )}
      </ScrollView>
    )
  }, [props.booked]);

  return (
    <View style={{ flex: 1, marginTop: -20 }}>
      {initialStatus}
    </View>
  )
}

export default Status;