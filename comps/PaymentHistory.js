import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Picker} from 'react-native';
import Header from './Header';
import styles from '../styles/PaymentHistoryStyles';
//import {Mastercard} from './SVGComps';

const PaymentHistory = () => {
  const [currentTab, setCurrentTab] = useState('Payment');
  const [month, setMonth] = useState('October');
  const [year, setYear] = useState('2019');

  return (
    <View style={styles.background}>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <View style={styles.pickerRow}>
            <Picker
            onValueChange={(value)=>{setMonth(value)}}
            selectedValue={month}
            >
            <Picker.Item label='November' value='November'/>
            <Picker.Item label='December' value='December'/>
            <Picker.Item label='January' value='January'/>
            </Picker>
            <Picker>

            </Picker>
        </View>
    </View>
  );
};

export default PaymentHistory;
