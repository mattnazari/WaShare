import React, { useState } from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
  const [name, setName] = useState('default');

  return (
    <View>
      <Header setName={setName} />
      <WasherMachines />
      <DryerMachines />
      <Footer name={name} />
    </View>
  )
};

export default Main;