import React from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './comps/Main';
import ExtendMachine from './comps/ExtendMachine';

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
      <ExtendMachine />
    </View>
  )
}

export default App;
