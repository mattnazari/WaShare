import React from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './comps/Main';

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
      <Main />
    </View>
  )
}

export default App;
