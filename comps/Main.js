import React from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';

const Main = () => {
  return (
    <View>
      <WasherMachines />
      <DryerMachines />
      <Footer />
    </View>
  )
};

export default Main;