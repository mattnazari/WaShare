import React, { useState } from 'react';
import { View } from 'react-native';
import MachineContainer from './MachineContainer';
import Footer from './Footer';
import Header from './Header';
import Status from './Status';

const Main = () => {
  const [name, setName] = useState('Book');

  //default view of home page
  let home = (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MachineContainer name={name} type={'Washer'} />
      </View>
      <View style={{ flex: 1 }}>
        <MachineContainer name={name} type={'Dryer'} />
      </View>
      <Footer name={name} />
    </View>
  )

  //show status component only when selected in tab bar
  if (name == 'Status') {
    home = (
      <Status setName={setName} />
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