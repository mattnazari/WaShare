import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/FooterStyles';
import { book, status, notify } from '../styles/ThemeStyles';
import axios from 'axios';
import { withNavigation } from 'react-navigation';
import ModalComp from './ModalComp';
import ModalTextInput from './ModalTextInput';
import ModalSingleCTA from './ModalSingleCTA';

const Footer = (props) => {
  let themeName = '';
  let color;

  switch (props.currentTab) {
    case 'Book':
      themeName = book
      color = 'blue'
      break;
    case 'Status':
      themeName = status
      color = 'purple'
      break;
    case 'Notify':
      themeName = notify
      color = 'lightpurple'
    case 'Report':
      color = 'blue'
  }

  const ReadMachinesBooked = async () => {
    var obj = {
      key: 'machinesbooked_read',
      data: {}
    }
    let r = await axios.post('https://d3washare.herokuapp.com/post', obj)
    let dbmachinesbooked = JSON.parse(r.data.body)
    console.log('READING MACHINES BOOKED', dbmachinesbooked)
  }

  const UpdateMachinesStatus = async (e) => {
    var obj = {
      key: 'machines_update',
      data: {
        id: e.id,
        status: 1
      }
    }
    var r = await axios.post('https://d3washare.herokuapp.com/post', obj)
    console.log("UPDATE MACHINE")
  }

  const CreateMachineBooked = async (e) => {
    // RUN_TIME IN SECONDS
    let run_time;
    if(e.type == 'Washer'){
      run_time = 30*60
    } else {
      run_time = 60*60
    }
    let obj = {
      key: 'machinesbooked_create',
      data: {
        machine_id: e.id,
        lockstate: 0,
        run_time: run_time
      }
    }
    let r = await axios.post('https://d3washare.herokuapp.com/post', obj)
    console.log("INSERT MACHINE",r.data)
    await UpdateMachinesStatus(e)
  }

  const [noneSelectedModalVisible, setNoneSelectedModalVisible] = useState(false)
  const [bookModalVisible, setBookModalVisible] = useState(false)
  const [notifyModalVisible, setNotifyModalVisible] = useState(false)
  const [reportModalVisible, setReportModalVisible] = useState(false)

  const [reportInputValue, setReportInputValue] = useState('')

  const CreateReportEntry = async (e) => {
    var obj = {
      key: 'report_create',
      data: {
        machine_id: e.id,
        report: reportInputValue,
      }
    }
    var r = await axios.post('https://d3washare.herokuapp.com/post', obj)
    setReportInputValue('')
  }

  return (
    <View>
      {/* ========================================== */}
      {/* BOOKING MODAL */}
      {/* ========================================== */}
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
        primaryonPress={async() => {
          for(var e in props.selected){ 
          await CreateMachineBooked(props.selected[e])
          };
          props.setCurrentTab('Status')
          props.setSelected([])
          setBookModalVisible(!bookModalVisible)
        }}
        primaryButton={'Yes, book them.'}
        seconPress={() => {
          setBookModalVisible(!bookModalVisible)
        }}
        secButton={'No, take me back'} />

      {/* ========================================== */}
      {/* NOTIFY MODAL */}
      {/* ========================================== */}
      <ModalComp
        isVisible={notifyModalVisible}
        color={'lightpurple'}
        onBackdropPress={() => {
          setNotifyModalVisible(!notifyModalVisible)
        }}
        onSwipeComplete={() => {
          setNotifyModalVisible(!notifyModalVisible)
        }}
        title={'Notify the user of this machine?'}
        desc={`This will send a notification to the phone of the previous user of the selected machine. Do you want to proceed?`}
        primaryonPress={() => {
          // TODO
          // .. CREATE entry in notify table of database
          setNotifyModalVisible(!notifyModalVisible)
          props.setSelected([])
          props.navigation.navigate('ModalScreen', {
            title: `Notification Sent`,
            desc: 'The user of the machine has been notified!',
            image: require('../assets/Images/modalNotify.png')
          })
        }}
        primaryButton={'Yes, notify this user'}
        seconPress={() => {
          setNotifyModalVisible(!notifyModalVisible)
          props.setSelected([])
        }}
        secButton={'No'} />

      {/* ========================================== */}
      {/* NOTHING SELECTED MODAL */}
      {/* ========================================== */}
      <ModalSingleCTA
        isVisible={noneSelectedModalVisible}
        color={color}
        onBackdropPress={() => {
          setNoneSelectedModalVisible(!noneSelectedModalVisible)
        }}
        onSwipeComplete={() => {
          setNoneSelectedModalVisible(!noneSelectedModalVisible)
        }}
        title={`You haven't selected any machines yet.`}
        desc={`Tap on one of the machines to select it, then press the button below.`}
        primaryonPress={() => {
          setNoneSelectedModalVisible(!noneSelectedModalVisible)
        }}
        primaryButton={'Got it!'} />

      {/* ========================================== */}
      {/* REPORT MODAL */}
      {/* ========================================== */}
      <ModalTextInput
        isVisible={reportModalVisible}
        color={'blue'}
        value={reportInputValue}
        onChangeText={(text) => {
          setReportInputValue(text)
        }}
        onBackdropPress={() => {
          setReportModalVisible(!reportModalVisible)
        }}
        onSwipeComplete={() => {
          setReportModalVisible(!reportModalVisible)
        }}
        title={'Report issues below.'}
        desc={`The building manager will be contacted directly when you report an issue through here.`}
        placeholder={'Describe the problem.'}
        primaryonPress={() => {
          if (reportInputValue.length !== 0) {
            props.selected.forEach(e => {
              CreateReportEntry(e)
            });
            props.setSelected([])
            setReportModalVisible(!reportModalVisible)
            props.navigation.navigate('ModalScreen', {
              title: `Report Sent`,
              desc: 'Your report was sent successfully. Thanks for your help!',
              image: require('../assets/Images/modalReport.png')
            })
          } else if (reportInputValue.length === 0) {
            Alert.alert('Describe the problem', 'Tap inside the text box to describe your issue, then press the send report button.')
          }
        }}
        primaryButton={'Send the report'}
        seconPress={() => {
          setReportInputValue('')
          setReportModalVisible(!reportModalVisible)
          props.setSelected([])
        }}
        secButton={'Cancel'} />

      <TouchableOpacity
        style={[styles.container, themeName.color, themeName.shadowColor]}
        onPress={() => {
          if (props.currentTab == 'Book') {
            if (props.selected.length === 0) {
              setNoneSelectedModalVisible(!noneSelectedModalVisible)
            } else {
              setBookModalVisible(!bookModalVisible)
            }
          }
          if (props.currentTab == 'Status') {
            alert('Open status page')
          }
          if (props.currentTab == 'Notify') {
            if (props.selected.length === 0) {
              setNoneSelectedModalVisible(!noneSelectedModalVisible)
            } else {
              setNotifyModalVisible(!notifyModalVisible)
            }
          }
          if (props.currentTab == 'Report') {
            if (props.selected.length === 0) {
              setNoneSelectedModalVisible(!noneSelectedModalVisible)
            } else {
              setReportModalVisible(!reportModalVisible)
            }
          }
        }}>
        <Text style={styles.text}>{props.currentTab.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(Footer);