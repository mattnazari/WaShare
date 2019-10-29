import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/ForgotStyles';
import {Back} from './SVGComps';

const Forgot = props => {
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
        <Text style={styles.header}>Forgot Digitcode</Text>
        <View style={styles.headerTextContainer}>
          <Text styles={styles.headerText}>
            {'Enter your account information \nto get the contact details'}
          </Text>
        </View>

        {/* Main Body */}
        <View style={{marginTop: 50}}>
          <Text style={styles.inputTitles}>Unit Number</Text>
          <TextInput style={styles.input} />
          <View style={{marginTop: 30}}>
            <Text style={styles.inputTitles}>Name</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
      </View>
      <View style={styles.send}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgot;
