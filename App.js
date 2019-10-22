import React from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './comps/Main';
import Payment from './comps/Payment';
import PaymentHistory from './comps/PaymentHistory';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <PaymentHistory/>
    </View>
  )
}

export default App;
