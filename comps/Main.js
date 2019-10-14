import React from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
 
  return (
    <View>
      <Header />
      <WasherMachines />
      <DryerMachines />
      <Footer />
    </View>
  )
};

export default Main;