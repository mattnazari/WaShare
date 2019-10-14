import React from 'react';
import { View, Text } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';

const Main = () => {
  return (
    <View>
      <WasherMachines />
      <DryerMachines />
    </View>
  )
};

export default Main;