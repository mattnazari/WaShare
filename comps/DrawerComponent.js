import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';


export const DrawerComponent = props => (
  <View style={styles.container}>
    <SafeAreaView>
      <Text style={styles.unitText}>Unit 420</Text>
    </SafeAreaView>
    <SafeAreaView
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  unitText: {
    fontFamily: 'CircularStd-Black',
    fontSize: 24,
    letterSpacing: -0.6
  }
});