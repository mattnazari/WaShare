import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ModalComp from './ModalComp';

const iconDim = 24

const DrawerComponent = props => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <ModalComp
          isVisible={logoutModalVisible}
          color={'blue'}
          onBackdropPress={() => {
            setLogoutModalVisible(!logoutModalVisible)
          }}
          onSwipeComplete={() => {
            setLogoutModalVisible(!logoutModalVisible)
          }}
          title={'Logout?'}
          desc={`You'll have to log in again when you next open the app. Are you sure you want to proceed?`}
          primaryonPress={() => {
            setLogoutModalVisible(!logoutModalVisible)
            props.screenProps.SetData({})
            props.navigation.navigate('Login')
          }}
          primaryButton={'Yes, logout'}
          seconPress={() => {
            setLogoutModalVisible(!logoutModalVisible)
          }}
          secButton={'Cancel'} />
        <SafeAreaView>
          <Text style={styles.nameText}>Hello, {props.screenProps.data.first_name} {props.screenProps.data.last_name}</Text>
        </SafeAreaView>
        <SafeAreaView>
          <Text style={styles.unitText}>Unit {props.screenProps.data.unit}</Text>
        </SafeAreaView>
      </View>
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
      <SafeAreaView>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => {
            setLogoutModalVisible(!logoutModalVisible)
          }}>
          <Icon name='logout' size={iconDim} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
};

export default DrawerComponent;

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