import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MachineStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Dryer = props => {
  let themeName;
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

  //default style for unselected machines
  let machineStyle = [styles.container, themeName.shadowColor];
  let selectedBox = null;

  const [selected, setSelected] = useState(false)
  if (selected === true) {
    machineStyle = [styles.container, themeName.shadowColor, {height: 180, width: 160}]
    selectedBox = (
      <View style={[styles.selectedBox, themeName.color]}>
        <Text style={styles.selectedBoxText}>Selected</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity
      style={machineStyle}
      onPress={() => {
        setSelected(!selected)
      }}>
      {selectedBox}
      <Text style={styles.machine}>Dryer {props.id}</Text>
      <View style={[styles.circle, themeName.borderColor]}></View>
      <Text style={styles.timeRemaining}>{availText}</Text>
    </TouchableOpacity>
  )
}

export default Dryer;