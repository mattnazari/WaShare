import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

const NotificationItem = (props) => {
  let time = props.date / 60

  return (
    <View>
      <Text>{time} minutes ago</Text>
      <Text>{props.message}</Text>
    </View>
  )
}

const Notification = () => {
  return (
    <View>
      <Header name={'Notifications'} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <NotificationItem message={'Hello World!'} date={600}/>
      </View>
    </View>
  )
}

export default Notification;