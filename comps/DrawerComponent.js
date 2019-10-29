import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';


export const DrawerComponent = props => (
  <View style={styles.container}>
    <View>
      <SafeAreaView>
        <Text style={styles.nameText}>Hello, {props.name}</Text>
      </SafeAreaView>
      <SafeAreaView>
        <Text style={styles.unitText}>Unit 420</Text>
      </SafeAreaView>
    </View>
    <SafeAreaView
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    padding: 40
  },
  unitText: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 24,
    letterSpacing: -0.6,
    paddingVertical: 12
  },
  nameText: {
    fontFamily: 'CircularStd-Black',
    fontSize: 36,
    letterSpacing: -0.6,
  }
});