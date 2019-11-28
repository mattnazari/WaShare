import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch, Image} from 'react-native';
import Header from './Header';
import styles from '../styles/PaymentStyles';
import ModalSingleCTA from './ModalSingleCTA';
//import {Mastercard} from './SVGComps';

const Payment = () => {
  const [currentTab, setCurrentTab] = useState('Payment');
  const [switchMode, setSwitchMode] = useState('false');
  const [paymentModalVisible, setpaymentModalVisible] = useState(false)



  return (
    <View style={styles.background}>

      <ModalSingleCTA
        isVisible={paymentModalVisible}
        color={'blue'}
        onBackdropPress={() => {
          setpaymentModalVisible(!paymentModalVisible)
        }}
        onSwipeComplete={() => {
          setpaymentModalVisible(!paymentModalVisible)
        }}
        title={`Success!`}
        desc={'You have successfully entered your card information.'}
        primaryonPress={() => {
          setpaymentModalVisible(!paymentModalVisible)
        }}
        primaryButton={'dismiss'}
        />
         
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
            placeholder="Cardholder Name"
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

      
        <TouchableOpacity 
        style={styles.button}
        onPress={() =>{
          setpaymentModalVisible(!paymentModalVisible)
        }}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default Payment;
