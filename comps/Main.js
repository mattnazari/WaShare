import React, { useState } from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';
import Header from './Header';
import Status from './Status';

const Main = () => {
  const [name, setName] = useState('Book');

  //default view of home page
  let home = (
    <View>
      <WasherMachines name={name} />
      <DryerMachines name={name} />
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
    <View style={{flex:1}}>
      <Header setName={setName} name={name} />
      {home}
    </View>
  )
};

export default Main;