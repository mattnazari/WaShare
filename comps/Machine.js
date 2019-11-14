import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MachineStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Machine = props => {
  let themeName;
  let status;

  let machineNum = props.id;
  if (props.type == 'Dryer') {
    machineNum = machineNum - 4
  }

  switch (props.status) {
    case 0:
      status = 'Ready'
      break;
    case 1:
      status = 'In-Use'
      break;
    case 2:
      status = 'Unavailable'
      break;
  }

  switch (props.currentTab) {
    case 'Book':
      themeName = book
      break;
    case 'Status':
      themeName = status
      break;
    case 'Notify':
      themeName = notify
      break;
    case 'Report':
      themeName = book
      break;
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

  useEffect(() => {
    setSelected(false)
  }, [props.currentTab, props.selected])

  return (
    <TouchableOpacity
      style={machineStyle}
      onPress={() => {
        const idIndex = props.selected.map(machine => { return machine.id; }).indexOf(props.id);
        const typeIndex = props.selected.map(machine => { return machine.type; }).indexOf(props.type);
        const data = { id: props.id, lock: props.lock, type: props.type };

        if (idIndex === -1) {
          console.log('pushing')
          props.pushSelect(data)
        } else {
          console.log('splicing')
          props.spliceSelect(idIndex)
        }
        setSelected(!selected)
      }}>
      {selectedBox}
      <Text style={styles.machine}>{props.type} {props.num + 1}</Text>
      <View style={[styles.circle, themeName.borderColor]}></View>
      <Text style={styles.timeRemaining}>{status}</Text>
    </TouchableOpacity>
  )
}

export default Machine;