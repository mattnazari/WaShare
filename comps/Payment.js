import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from 'react-native';
import Header from './Header';
import styles from '../styles/PaymentStyles';

const Payment = () => {
  const [currentTab, setCurrentTab] = useState('Payment');

  return (
    <View style={styles.background}>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <View style={styles.formContainer}>
        <Text>Card Number</Text>
        <TextInput style={styles.textInput} placeholder="**** **** **** ****" />
        <View style={styles.formRow}>
        <View style={styles.formColumn}>
          <Text>Valid until</Text>
          <TextInput style={styles.textInput} placeholder="Month / Year" />
        </View> 
        <View style={styles.formColumn}>
          <Text>CVV</Text>
          <TextInput style={styles.textInput} placeholder="***" />
        </View>
        </View>
        <Text>Card holder</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your first name and last name"
        />
        <View style={styles.formRow}>
          <Text>Save card for payment</Text>
          <Switch />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
