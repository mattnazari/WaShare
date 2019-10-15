import React, { useState } from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';
import Header from './Header';

import styles from '../styles/MachineStyles';
import { book, status, notify } from '../styles/ThemeStyles';

const Main = () => {
  const [name, setName] = useState('Book');
  const [selected, setSelected] = useState(false)
  
  return (
    <View>
      <Header setName={setName} name={name} />
      <WasherMachines name={name} />
      <DryerMachines name={name} selected={selected} setSelected={setSelected} />
      <Footer name={name} />
    </View>
  )
};

export default Main;