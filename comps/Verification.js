import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/VerificationStyles';
import {Back} from './SVGComps';

const Verification = props => {
  return (
    <View style={styles.background}>

      {/* Header */}
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Back fill={'black'} height={25} width={25} />
        </TouchableOpacity>
        <Text style={styles.header}>Verification</Text>
        <View style={styles.headerTextContainer}>
          <Text styles={styles.headerText}>
            {"A code has been sent to your phone.\nEnter that code here."}
          </Text>
        </View>
        </View>

        {/* Verification Input */}
        <View style={styles.container}>
            <Text style={styles.verifyText}>Enter verification number</Text>
            <TextInput
            style={styles.input}
            maxLength={4}
            />
            <View style={styles.rowContainer}>
            <Text style={styles.greyText}>Didn't get a code?</Text>
            <TouchableOpacity>
                <Text style={styles.resend}>Resend</Text>
            </TouchableOpacity>
            </View>
        </View>

        {/* Bottom Buttons */}
      <View>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('Reset')
        }}
        >
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.cancelButton}
        onPress={() => {
          props.navigation.navigate('Login')
        }}
        >
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>

      </View>
  );
};

export default Verification;