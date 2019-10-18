import React, { useState } from 'react';
import { View } from 'react-native';
import MachineContainer from './MachineContainer';
import Footer from './Footer';
import Header from './Header';
import Status from './Status';

let id = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
]; //give each machine a unique id

const Main = () => {
  //arrays to handle booking, notifying, status, and selected
  const [booked, setBooked] = useState([]);
  const [selected, setSelected] = useState([]);

  //handle styling of current page
  const [currentTab, setCurrentTab] = useState('Book');

  function pushSelect(id) {
    console.log('machine ' + id);
    var arr = selected;
    arr.push(id);
    setSelected(arr);
  }

  function spliceSelect(id) {
    console.log('machine ' + id)
    var arr = selected;
    arr.splice(id, 1);
    setSelected(arr)
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
          id={id}
          currentTab={currentTab}
          selected={selected}
          type={'Washer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect} />
      </View>
      <View style={{ flex: 1 }}>
        <MachineContainer
          id={id}
          currentTab={currentTab}
          selected={selected}
          type={'Dryer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect} />
      </View>
      <Footer
        id={id}
        booked={booked}
        currentTab={currentTab}
        selected={selected}
        setSelected={setSelected}
        bookMachines={bookMachines} />
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
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
      {home}
    </View>
  )
};

export default Main;