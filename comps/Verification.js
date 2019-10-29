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

        <View>
            <Text>Enter verification number</Text>
            <TextInput
            />
            <View>
            <Text>Didn't get a code?</Text>
            <TouchableOpacity>
                <Text>Resend</Text>
            </TouchableOpacity>
            </View>
        </View>

        {/* Bottom Buttons */}
      <View style={styles.send}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      </View>

      </View>
  );
};

export default Verification;