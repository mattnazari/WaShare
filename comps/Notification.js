import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Header from './Header';
import styles from '../styles/NotificationStyles';

export const NotificationItemOne = props => {
  let time = props.date / 60;

  return (
    <View style={{alignSelf: 'stretch'}}>
      <View style={styles.notificationContainerOne}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.message}>{props.message}</Text>
        <Text style={styles.timeText}>{time} minutes ago</Text>
      </View>
    </View>
  );
};

export const NotificationItemTwo = props => {
  let time = props.date / 60;

  return (
    <View style={{alignSelf: 'stretch'}}>
      <View style={styles.notificationContainerTwo}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.message}>{props.message}</Text>
        <Text style={styles.timeText}>{time} minutes ago</Text>
      </View>
    </View>
  );
};

export const NotificationItemThree = props => {
  let time = props.date / 60;

  return (
    <View style={{alignSelf: 'stretch'}}>
      <View style={styles.notificationContainerThree}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.message}>{props.message}</Text>
        <Text style={styles.timeText}>{time} minutes ago</Text>
      </View>
    </View>
  );
};

export function PushNotifications(title, message, time) {}

const Notification = props => {
  return (
    <View style={{flex: 1}}>
      <Header currentTab={'Notifications'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <NotificationItemOne
          title={'Another user notified you'}
          message={'Please pick up your laundry!'}
          date={600}
        />
        <NotificationItemTwo
          title={'Dryer 2 is out of order'}
          message={
            'A repairman will be on his way to fix the dryer. In the meantime, use another one.'
          }
          date={600}
        />
        <NotificationItemThree
          title={'Washer 1 is almost done'}
          message={
            'Your washer finishes in 5 minutes. Be ready to pick up your laundry.'
          }
          date={600}
        />
      </ScrollView>
    </View>
  );
};

export default Notification;
