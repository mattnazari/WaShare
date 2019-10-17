import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/FooterStyles';
import { status } from '../styles/ThemeStyles';

const main = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center'
  }
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
          props.setName('Book')
        }}>
        <Text style={styles.text}>Browse available machines</Text>
      </TouchableOpacity>
    </View>
  )

  if (props.selected.length >= 1) {
    initialStatus = (
      <View>
        <Text>The array is not empty!</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {initialStatus}
    </View>
  )
}

export default Status;