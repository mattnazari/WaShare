import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from './Header';

export const NotificationItem = props => {
  let time = props.date / 60;
  let color;

  switch (props.color) {
    case 'lightpurple':
      color = '#7E33B8'
      break;
    case 'darkpurple':
      color = '#6E41DA'
      break;
    case 'blue':
      color = '#506BFB'
      break;
  }

  return (
    <View style={{ alignSelf: 'stretch' }}>
      <View style={[styles.container, { borderLeftColor: color }]}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.message}>{props.message}</Text>
        <Text style={styles.timeText}>{time} minutes ago</Text>
      </View>
    </View>
  );
};

const Notification = props => {
  return (
    <View style={{ flex: 1 }}>
      <Header currentTab={'Notifications'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <NotificationItem
          color={'lightpurple'}
          title={'Another user notified you'}
          message={'Please pick up your laundry!'}
          date={600}
        />
        <NotificationItem
          color={'blue'}
          title={'Dryer 2 is out of order'}
          message={
            'A repairman will be on his way to fix the dryer. In the meantime, use another one.'
          }
          date={600}
        />
        <NotificationItem
          color={'darkpurple'}
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

const styles = StyleSheet.create({
  title: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    letterSpacing: -0.4,
    color: '#363636'
  },
  message: {
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
    letterSpacing: -0.4,
    color: '#676666'
  },
  timeText: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
    letterSpacing: -0.4,
    color: '#ACACAC',
    alignSelf: 'flex-end'
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 24
  },
  container: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: "#FBF8F8",
    padding: 24,
    elevation: 16,
    marginVertical: 8,
    shadowColor: "#919191",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    borderRadius: 20,
    borderLeftWidth: 12,
    borderLeftColor: '#7E33B8'
  }
})
