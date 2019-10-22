import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from 'react-native';
import Header from './Header';
import styles from '../styles/PaymentHistoryStyles';
//import {Mastercard} from './SVGComps';

const PaymentHistory = () => {
  const [currentTab, setCurrentTab] = useState('Payment');

  return (
    <View style={styles.background}>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
      
    </View>
  );
};

export default PaymentHistory;
