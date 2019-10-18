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
    <View>
      <MachineContainer name={name} type={'Washer'} />
      <MachineContainer name={name} type={'Dryer'} />
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