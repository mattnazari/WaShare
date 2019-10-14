import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HeaderStyles';

const Header = props => {
  let description = '';
  
  switch (props.name) {
    case 'Book':
      description = 'Tap a machine to select a machine for booking. You can select multiple machines at once.'
      break;
    case 'Alert':
      description = 'Alert users by tapping a machine. This gives them a notification that their laundry is finished.'
      break;
    case 'Report':
      description = 'Report broken machines by tapping the machine, our repairmen will be contacted as soon as possible.'
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.name} machines</Text>
        <Text style={styles.titleDesc}>{description}</Text>
      </View>
      <View style={styles.barContainer}>
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => {
            props.setName('Book')
          }}>
          <Text style={styles.activeText}>BOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => {
            props.setName('Alert')
          }}>
          <Text style={styles.text}>ALERT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.spacing}
          onPress={() => {
            props.setName('Report')
          }}>
          <Text style={styles.text}>REPORT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header;