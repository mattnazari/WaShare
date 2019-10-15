import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MachineStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Washer = props => {
  let themeName = '';

  const [avail, setAvail] = React.useState(true);
  if (avail === true) {
    availText = 'Available'
  }
  if (avail === false) {
    availText = 'Unavailable'
  }

  switch (props.name) {
    case 'Book':
      themeName = book
      break;
    case 'Status':
      themeName = status
      break;
    case 'Notify':
      themeName = notify
  }

  return (
    <TouchableOpacity
      style={[styles.container, themeName.shadowColor]}
      onPress={() => {
        setAvail(!avail)
      }}>
      <Text style={styles.machine}>Washer {props.id}</Text>
      <View style={[styles.circle, themeName.borderColor]}></View>
      <Text style={styles.timeRemaining}>{availText}</Text>
    </TouchableOpacity>
  )
}

export default Washer;