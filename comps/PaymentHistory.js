import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from './Header';
import styles from '../styles/PaymentHistoryStyles';

const PaymentHistory = () => {
  const [currentTab, setCurrentTab] = useState('Payment');

  return (
    <View style={styles.background}>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={{alignSelf: 'stretch'}}>
          <View style={styles.textRow}>
            <Text style={styles.titleText}>October, 2019</Text>
            <Text style={styles.titleText}>Total: $10.50</Text>
          </View>
          <TouchableOpacity style={styles.historyBox}>
            <View style={styles.textRow}>
              <Text style={styles.machineAndPrice}>Dryer 1</Text>
              <Text style={styles.machineAndPrice}>$3.00</Text>
            </View>
            <Text style={styles.historyInfoText}>
              Oct 18, Fri 8:40pm (96mins)
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentHistory;
