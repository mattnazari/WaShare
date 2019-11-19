import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/ContactStyles';
import {Back, Check} from './SVGComps';

const Contact = props => {

  let [check, setCheck] = useState(styles.checked)
  let [selected, setSelected] = useState(false)

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

      {/* Contact Buttons */}
      <View>
        <Text style={styles.unitText}>{'Unit 305 \nAngela Jang'}</Text>
        <TouchableOpacity
        onPress={() => {
          
        }}>
        <View style={styles.border}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={styles.textColumn}>
            <View>
              <Text style={styles.confirm}>Confirm via SMS</Text>
            </View>
            <View>
              <Text style={styles.boxGrayText}>+ 1 *** *** **14</Text>
            </View>
          </View>
          <View style={styles.checked}>
            <Check/>
          </View>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.border}>
          <View style={styles.textColumn}>
            <View>
              <Text style={styles.confirm}>Confirm via Email</Text>
            </View>
            <View>
              <Text style={styles.boxGrayText}>*******58@gmail.com</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
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