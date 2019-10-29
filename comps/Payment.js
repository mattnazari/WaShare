import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch, Image} from 'react-native';
import Header from './Header';
import styles from '../styles/PaymentStyles';
//import {Mastercard} from './SVGComps';

const Payment = () => {
  const [currentTab, setCurrentTab] = useState('Payment');
  const [switchMode, setSwitchMode] = useState('false');



  return (
    <View style={styles.background}>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <View style={styles.formContainer}>
        <View style={styles.inputPadding}>
          <Text style={styles.textStyling}>Card Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="**** **** **** ****"
            maxLength={16}
          />
        </View>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <View style={styles.inputPadding}>
              <Text style={styles.textStyling}>Valid until</Text>
              <TextInput 
              style={styles.monthAndYear}
              placeholder="Month / Year" 
              maxLength={5}
              />
            </View>
          </View>
          <View style={styles.formColumn}>
            <View style={styles.inputPadding}>
              <Text style={styles.textStyling}>CVV</Text>
              <TextInput 
              style={styles.cvv} 
              placeholder="***"
              maxLength={3}
              />
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
          <Switch 
          trackColor={{false: '#D8D8D8', true: "#D8D8D8"}}
          thumbColor="#506BFB"
          style={styles.switch}
          value={switchMode}
          onValueChange={() => {
            setSwitchMode(!switchMode);
          }}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
