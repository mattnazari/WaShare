import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    marginTop: -20
  },
})

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={main.scrollContainer}>
        {props.booked.map((machine) =>
          <StatusMachine
            key={machine.type + machine.id}
            type={machine.type}
            id={machine.id} />
        )}
      </ScrollView>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {initialStatus}
    </View>
  )
}

export default Status;