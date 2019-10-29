import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from './Header';
import styles from '../styles/PaymentHistoryStyles';

const PaymentHistory = () => {
  const [currentTab, setCurrentTab] = useState('Payment');

  return (
    <View style={styles.background}>
      <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <View style={styles.scrollViewHeight}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={{alignSelf: 'stretch'}}>
          
          <View style={{marginBottom:50}}>
          {/* Payment History Title */}
          <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>October, 2019</Text>
            <Text style={styles.titleText}>Total: $10.50</Text>
          </View>
          
          {/* Payment History Boxes */}
          <TouchableOpacity style={styles.historyBox}>
            <View style={styles.textRow}>
              <Text style={styles.machineAndPrice}>Dryer 1</Text>
              <Text style={styles.machineAndPrice}>$3.00</Text>
            </View>
            <Text style={styles.historyInfoText}>
              Oct 18, Fri 8:40pm (96mins)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.historyBox}>
            <View style={styles.textRow}>
              <Text style={styles.machineAndPrice}>Washer 1</Text>
              <Text style={styles.machineAndPrice}>$2.50</Text>
            </View>
            <Text style={styles.historyInfoText}>
              Oct 18, Fri 7:35pm (60mins)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.historyBox}>
            <View style={styles.textRow}>
              <Text style={styles.machineAndPrice}>Washer 2</Text>
              <Text style={styles.machineAndPrice}>$2.50</Text>
            </View>
            <Text style={styles.historyInfoText}>
              Oct 5, Sat 6:05pm (30mins)
            </Text>
          </TouchableOpacity>
          </View>

          <View style={{marginBottom:50}}>
          {/* Payment History Title */}
          <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>September, 2019</Text>
            <Text style={styles.titleText}>Total: $20.00</Text>
          </View>
          
          {/* Payment History Boxes */}
          <TouchableOpacity style={styles.historyBox}>
            <View style={styles.textRow}>
              <Text style={styles.machineAndPrice}>Dryer 3</Text>
              <Text style={styles.machineAndPrice}>$2.50</Text>
            </View>
            <Text style={styles.historyInfoText}>
              Sep 28, Sun 10:00pm (60mins)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.historyBox}>
            <View style={styles.textRow}>
              <Text style={styles.machineAndPrice}>Washer 1</Text>
              <Text style={styles.machineAndPrice}>$2.50</Text>
            </View>
            <Text style={styles.historyInfoText}>
              Sep 28, Sun 9:20am (30mins)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.historyBox}>
            <View style={styles.textRow}>
              <Text style={styles.machineAndPrice}>Washer 4</Text>
              <Text style={styles.machineAndPrice}>$2.50</Text>
            </View>
            <Text style={styles.historyInfoText}>
              Sep 28, Sun 9:20am (30mins)
            </Text>
          </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
      </View>
    </View>
  );
};

export default PaymentHistory;
