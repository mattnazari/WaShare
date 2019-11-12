import React, { useState } from 'react';
import { View } from 'react-native';
import MachineContainer from './MachineContainer';
import Footer from './Footer';
import Header from './Header';
import Status from './Status';

const Main = ({ navigation }) => {
  //array to handle booking
  const [booked, setBooked] = useState([]);
  //handles machine selection
  const [selected, setSelected] = useState([]);
  //handle styling of current page (home screen)
  const [currentTab, setCurrentTab] = useState('Book');
  const [machineAvailability, setMachineAvailability] = useState('Available');
  const [lockState, setLockState] = useState(true);

  function pushSelect(id) {
    console.log('INDIVIDUAL machine ' + JSON.stringify(id));
    var arr = selected;
    arr.push(id);
    setSelected(arr);
    console.log(selected)
  }

  function spliceSelect(id) {
    console.log('INDIVIDUAL machine ' + id)
    var arr = selected;
    arr.splice(id, 1);
    setSelected(arr)
    console.log(selected)
  }

  function spliceBooked(id) {
    let arr = booked;
    arr.splice(id, 1);
    setBooked(arr);
  }

  function bookMachines(arr) {
    setBooked(arr);
    console.log(booked);
  }

  //default view of home page
  let home = (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MachineContainer
          currentTab={currentTab}
          selected={selected}
          type={'Washer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect}
          machineAvailability={machineAvailability} />
      </View>
      <View style={{ flex: 1 }}>
        <MachineContainer    
          currentTab={currentTab}
          selected={selected}
          type={'Dryer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect}
          machineAvailability={machineAvailability} />
      </View>
      <Footer
        booked={booked}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selected={selected}
        setSelected={setSelected}
        bookMachines={bookMachines}
        setMachineAvailability={setMachineAvailability}
        setLockState={setLockState} />
    </View>
  )

  //show status component only when selected in tab bar
  if (currentTab == 'Status') {
    home = (
      <Status
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        booked={booked}
        spliceBooked={spliceBooked}
        lockState={lockState}
        setLockState={setLockState} />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        setSelected={setSelected}
        selected={selected}
        navigation={navigation} />
      {home}
    </View>
  )
};

export default Main;