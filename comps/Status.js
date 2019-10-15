import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/FooterStyles';
import { status } from '../styles/ThemeStyles';
import { secondary } from '../styles/Typography';

const Status = props => {

  //default page when no machines are in use
  let initialStatus = (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={secondary.subtitle}>You don't have any machines booked right now.</Text>
      <TouchableOpacity
        style={[styles.container, status.color, status.shadowColor]}
        onPress={() => {
          props.setName('Book')
        }}>
        <Text style={styles.text}>Browse available machines</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      {initialStatus}
    </View>
  )
}

export default Status;