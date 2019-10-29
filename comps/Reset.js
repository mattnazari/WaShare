import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/ResetStyles';
import {Back} from './SVGComps';

const Reset = props => {
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
        <Text style={styles.header}>Reset your digitcode</Text>
        <View style={styles.headerTextContainer}>
        </View>
        </View>

        {/* Reset Input Box */}
        <View>
            <Text style={styles.resetText}>Reset digitcode</Text>
            <TextInput
            style={styles.input}
            maxLength={4}
            />
        </View>

        {/* Bottom Buttons */}
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>

      </View>
  );
};

export default Reset;