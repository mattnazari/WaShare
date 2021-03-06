import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MachineStyles';
import { book, status, notify } from '../styles/ThemeStyles';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Machine = props => {
  let themeName;
  let status;
  let machine;
  let color;

  let machineNum = props.id;
  if (props.type == 'Dryer') {
    machineNum = machineNum - 3
  }

  switch (props.currentTab) {
    case 'Book':
      themeName = book
      color = '#506BFB'
      break;
    case 'Status':
      themeName = status
      color = '#6E41DA'
      break;
    case 'Notify':
      themeName = notify
      color = '#7E33B8'
      break;
    case 'Report':
      themeName = book
      color = '#506BFB'
      break;
  }

  //default style for unselected machines
  let machineStyle = [styles.container, themeName.shadowColor];
  let selectedBox = null;

  const [selected, setSelected] = useState(false)
  if (selected === true) {
    machineStyle = [styles.container, themeName.shadowColor, { height: 170, width: 155 }]
    selectedBox = (
      <View style={styles.selectedBox}>
        <Icon name='check-circle' size={40} color={color} />
        {/* <Text style={styles.selectedBoxText}>Selected</Text> */}
      </View>
    )
  }

  switch (props.status) {
    case 0:
      status = 'Ready'
      machine = (<TouchableOpacity
        style={machineStyle}
        onPress={() => {
          const idIndex = props.selected.map(machine => { return machine.id; }).indexOf(props.id);
          const data = { id: props.id, type: props.type };

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
      </TouchableOpacity>)
      break;
    case 1:
      status = 'In-Use'
      machine = machine = (
        <View style={[machineStyle, { opacity: 0.5 }]}>
          <Text style={[styles.machine, { color: 'grey' }]}>{props.type} {props.num + 1}</Text>
          <LottieView source={require('../assets/grey-spinner.json')} autoPlay loop style={{width: 100, height: 100}} />
          <Text style={styles.timeRemaining}>{status}</Text>
        </View>)
      break;
    case 2:
      status = 'Unavailable'
      machine = machine = (
        <View style={[machineStyle, { opacity: 0.5 }]}>
          <Text style={[styles.machine, { color: 'grey' }]}>{props.type} {props.num + 1}</Text>
          <View style={[styles.circle, { borderColor: 'grey' }]}></View>
          <Text style={styles.timeRemaining}>{status}</Text>
        </View>)
      break;
  }

  useEffect(() => {
    setSelected(false)
  }, [props.currentTab, props.selected])

  return (
    <View>
      {machine}
    </View>
  )
}

export default Machine;