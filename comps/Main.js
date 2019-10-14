import React, { useState } from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
  const [name, setName] = useState('Book');
  
  return (
    <View>
      <Header setName={setName} name={name} />
      <WasherMachines />
      <DryerMachines />
      <Footer name={name} />
    </View>
  )
};

export default Main;