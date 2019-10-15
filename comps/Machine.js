import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MachineStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Machine = props => {
  let themeName = '';
  let availText = 'Available';

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

  switch (props.type) {
    case 'Washer':
      machineType = props.type
      break;
    case 'Dryer':
      machineType = props.type
  }

  //default style for unselected machines
  let machineStyle = [styles.container, themeName.shadowColor];
  let selectedBox = null;

  const [selected, setSelected] = useState(false)
  if (selected === true) {
    machineStyle = [styles.container, themeName.shadowColor, { height: 170, width: 155 }]
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
      <Text style={styles.machine}>{machineType} {props.id}</Text>
      <View style={[styles.circle, themeName.borderColor]}></View>
      <Text style={styles.timeRemaining}>{availText}</Text>
    </TouchableOpacity>
  )
}

export default Machine;