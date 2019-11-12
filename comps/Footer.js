import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/FooterStyles';
import { book, status, notify } from '../styles/ThemeStyles';
import axios from 'axios';

const Footer = (props) => {
  let themeName = '';

  switch (props.currentTab) {
    case 'Book':
      themeName = book
      break;
    case 'Status':
      themeName = status
      break;
    case 'Notify':
      themeName = notify
  }

  const CreateMachineBooked = async (e) => {
    let obj = {
      key: 'machinesbooked_create',
      data: {
        machine_id: e.id,
        lockstate: 0
      }
    }
    let r = await axios.post('http://localhost:3001/post', obj)
    console.log(r.data)
  }

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, themeName.color, themeName.shadowColor]}
        onPress={() => {
          if (props.currentTab == 'Book') {
            props.bookMachines(props.selected)
            if (props.selected.length == 0) {
              alert('You have no machines selected!')
            } else {
              props.setCurrentTab('Status')
              props.setLockState(true)
              props.selected.forEach(e => {
                CreateMachineBooked(e)
              });
            }
          }
          if (props.currentTab == 'Status') {
            alert('Open status page')
          }
          if (props.currentTab == 'Notify') {
            alert(JSON.stringify(props.selected))
          }
          if (props.currentTab == 'Report') {
            alert('REPORT INTERACTION')
          }
        }}>
        <Text style={styles.text}>{props.currentTab.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer;