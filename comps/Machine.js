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
    //passing washer id to array in parent component

  } /*else if (selected === false) {
    //search for index of selected washer in array
    const index = props.selected.indexOf(props.id);
    //delete from array
    props.selected.splice(index, 1)
  }*/

  return (
    <TouchableOpacity
      style={machineStyle}
      onPress={() => {
        const index = props.selected.indexOf(props.id);
        if (index === -1) {
          console.log('pushing')
          props.pushSelect(props.id)
        } else {
          console.log('splicing')
          props.spliceSelect(index)
        }
        setSelected(!selected)
      }}>
      {selectedBox}
      <Text style={styles.machine}>{props.type} {props.id}</Text>
      <View style={[styles.circle, themeName.borderColor]}></View>
      <Text style={styles.timeRemaining}>{availText}</Text>
    </TouchableOpacity>
  )
}

export default Machine;