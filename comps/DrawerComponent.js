import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconDim = 24

export const DrawerComponent = props => (
  <View style={styles.container}>
    <View>
      <SafeAreaView>
        <Text style={styles.nameText}>Hello, {props.screenProps.first_name}</Text>
      </SafeAreaView>
      <SafeAreaView>
        <Text style={styles.unitText}>Unit {props.screenProps.unit}</Text>
      </SafeAreaView>
    </View>
    <SafeAreaView
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
    <SafeAreaView>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => {
          alert('LOGOUT FUNCTION')
        }}>
        <Icon name='logout' size={iconDim} />
        <Text style={styles.logoutText}>Log Out</Text>
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
    color: '#848484',
    letterSpacing: -0.6,
    paddingVertical: 6
  },
  nameText: {
    fontFamily: 'CircularStd-Black',
    fontSize: 36,
    letterSpacing: -0.6,
  },
  logoutText: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    paddingLeft: 10
  }
});