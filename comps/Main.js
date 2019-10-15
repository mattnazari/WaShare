import React, { useState } from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';
import Header from './Header';
import Status from './Status';

const Main = () => {
  const [name, setName] = useState('Book');
  const selected = [];
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
    },
    {
      id: 6
    }
  ]; //give each machine a unique id

  //default view of home page
  let home = (
    <View>
      <WasherMachines name={name} id={id} selected={selected} />
      <DryerMachines name={name} />
      <Footer name={name} id={id} selected={selected} />
    </View>
  )

  //show status component only when selected in tab bar
  if (name == 'Status') {
    home = (
      <Status setName={setName} selected={selected} />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Header setName={setName} name={name} />
      {home}
    </View>
  )
};

export default Main;