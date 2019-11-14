import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/FooterStyles';
import { book, status, notify } from '../styles/ThemeStyles';
import axios from 'axios';
import ModalComp from './ModalComp';

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

  const ReadMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_read',
      data: {}
    }
    let r = await axios.post('http://localhost:3001/post', obj)
    let dbmachinesbooked = JSON.parse(r.data.body)
    console.log('READING MACHINES BOOKED', dbmachinesbooked)
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
    ReadMachinesBooked()
  }

  const [bookModalVisible, setBookModalVisible] = useState(false)

  return (
    <View>
      <ModalComp
        isVisible={bookModalVisible}
        color={'blue'}
        onBackdropPress={() => {
          setBookModalVisible(!bookModalVisible)
        }}
        onSwipeComplete={() => {
          setBookModalVisible(!bookModalVisible)
        }}
        title={'Book these machines?'}
        desc={`You currently have ${props.selected.length} machines selected. You won't be charged until you unlock them. Do you want to proceed?`}
        primaryonPress={() => {
          props.setCurrentTab('Status')
          props.selected.forEach(e => {
            CreateMachineBooked(e)
          });
          props.setSelected([])
          setBookModalVisible(!bookModalVisible)
        }}
        primaryButton={'Yes, book them.'}
        seconPress={() => {
          setBookModalVisible(!bookModalVisible)
        }}
        secButton={'No, take me back'} />

      <TouchableOpacity
        style={[styles.container, themeName.color, themeName.shadowColor]}
        onPress={() => {
          if (props.currentTab == 'Book') {
            if (props.selected.length === 0) {
              alert('You have no machines selected!')
            } else {
              setBookModalVisible(!bookModalVisible)
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