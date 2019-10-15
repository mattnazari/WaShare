import React from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './comps/Main';

import Notification from './comps/Notification';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'space-between',
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <Notification />
    </View>
  )
}

export default App;
