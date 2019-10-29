import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/ContactStyles';
import {Back} from './SVGComps';

const Contact = props => {
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
        <Text style={styles.header}>Contact Detail</Text>
        <View style={styles.headerTextContainer}>
          <Text styles={styles.headerText}>
            {"We'll send you a code to confirm \nthat this account is yours"}
          </Text>
        </View>
      </View>

      {/* Text input boxes */}
      <View>
        <Text style={styles.unitText}>{'Unit 305 \nAngela Jang'}</Text>
        <View style={styles.border}>
          <View style={styles.textColumn}>
            <View>
              <Text style={styles.confirm}>Confirm via SMS</Text>
            </View>
            <View>
              <TextInput 
              style={styles.input} 
              placeholder="+ 1 *** *** **14" 
              />
            </View>
          </View>
        </View>

        <View style={styles.border}>
          <View style={styles.textColumn}>
            <View>
              <Text style={styles.confirm}>Confirm via Email</Text>
            </View>
            <View>
              <TextInput 
              style={styles.input} 
              placeholder="*******58@gmail.com" 
              />
            </View>
          </View>
        </View>
      </View>


      {/* Bottom Buttons */}
      <View style={styles.send}>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => {
            props.navigation.navigate('Verification')
          }}
        >
          <Text style={styles.buttonText}>SEND</Text>
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

export default Contact;
