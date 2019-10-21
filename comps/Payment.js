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
        <View style={styles.inputPadding}>
          <Text style={styles.textStyling}>Card Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="**** **** **** ****"
          />
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <View style={styles.inputPadding}>
              <Text style={styles.textStyling}>Valid until</Text>
              <TextInput style={styles.textInput} placeholder="Month / Year" />
            </View>
          </View>
          <View style={styles.formColumn}>
            <View style={styles.inputPadding}>
              <Text style={styles.textStyling}>CVV</Text>
              <TextInput style={styles.textInput} placeholder="***" />
            </View>
          </View>
        </View>
        <View style={styles.inputPadding}>
          <Text style={styles.textStyling}>Card holder</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your first name and last name"
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.textStyling}>Save card for payment</Text>
          <Switch />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
