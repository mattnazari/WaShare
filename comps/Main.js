import React, { useState } from 'react';
import { View } from 'react-native';
import MachineContainer from './MachineContainer';
import Footer from './Footer';
import Header from './Header';
import Status from './Status';

//add all data for machines here
const washers = [
  {
    id: 1,
    type: 'Washer'
  },
  {
    id: 2,
    type: 'Washer'
  },
  {
    id: 3,
    type: 'Washer'
  },
  {
    id: 4,
    type: 'Washer'
  }
]
const dryers = [
  {
    id: 1,
    type: 'Dryer'
  },
  {
    id: 2,
    type: 'Dryer'
  }
]

const Main = () => {
  //arrays to handle booking, notifying, status, and selected
  const [booked, setBooked] = useState([]);
  //handles machine selection
  const [selected, setSelected] = useState([]);
  //handle styling of current page
  const [currentTab, setCurrentTab] = useState('Book');
  //sets availability of individual machines
  const [machineAvailability, setMachineAvailability] = useState('Available');

  function pushSelect(id) {
    console.log('machine ' + JSON.stringify(id));
    var arr = selected;
    arr.push(id);
    setSelected(arr);
    console.log(selected)
  }

  function spliceSelect(id) {
    console.log('machine ' + id)
    var arr = selected;
    arr.splice(id, 1);
    setSelected(arr)
    console.log(selected)
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
          machines={washers}
          currentTab={currentTab}
          selected={selected}
          type={'Washer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect}
          machineAvailability={machineAvailability} />
      </View>
      <View style={{ flex: 1 }}>
        <MachineContainer
          machines={dryers}
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
        selected={selected}
        setSelected={setSelected}
        bookMachines={bookMachines}
        setMachineAvailability={setMachineAvailability} />
    </View>
  )

  //show status component only when selected in tab bar
  if (currentTab == 'Status') {
    home = (
      <Status setCurrentTab={setCurrentTab} booked={booked} />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} setSelected={setSelected} selected={selected} />
      {home}
    </View>
  )
};

export default Main;