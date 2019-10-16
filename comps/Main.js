import React, { useState } from 'react';
import { View } from 'react-native';
import WasherMachines from './WasherMachines';
import DryerMachines from './DryerMachines';
import Footer from './Footer';
import Header from './Header';
import Onboarding from './Onboarding';

const Main = () => {
  const [name, setName] = useState('Book');
  const [onboardingName, setOnboardingName] = useState('firstOnboarding');
  
  return (
    <View style={{flex:1}}>
      <Onboarding
      onboardingName= {onboardingName}
      setOnboardingName={setOnboardingName}
      />
    </View>
  )
};

export default Main;