import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const colors = {
  main: '#6E41DA',
  dark: '#150161',
  light: '#A49FCD'
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 270,
    height: 400,
    backgroundColor: "#FFF",
    padding: 24,
    margin: 12,
    elevation: 16,
    shadowColor: "#506AFB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    borderRadius: 20,
  },
  title: {
    fontFamily: 'CircularStd-Black',
    fontSize: 36,
    letterSpacing: -1.2,
    paddingHorizontal: 24,
    color: colors.dark
  },
  largeText: {
    fontFamily: 'CircularStd-Black',
    fontSize: 72,
    letterSpacing: -1.2,
    color: colors.dark
  },
  subText: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 16,
    letterSpacing: -0.6,
    color: colors.light
  },
  circle: {
    height: 170,
    width: 170,
    borderStyle: 'solid',
    borderColor: colors.main,
    borderRadius: 100,
    borderWidth: 10,
    elevation: 16,
    shadowColor: "#506AFB",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.45,
    shadowRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const StatusMachine = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.type} {props.id}</Text>
      <View style={styles.circle}>
        <Text style={styles.largeText}>30</Text>
        <Text style={styles.subText}>minutes</Text>
        <Text style={styles.subText}>remaining</Text>
      </View>
    </View>
  )
}

export default StatusMachine;