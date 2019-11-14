import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ModalRed = props => {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}
      onSwipeComplete={props.onSwipeComplete}
      swipeDirection={['up', 'down', 'left', 'right']}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.primaryTitle}>{props.title}</Text>
        <Text style={styles.primaryText}>{props.desc}</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={props.primaryonPress}>
          <Text style={styles.primaryButtonText}>{props.primaryButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secButton}
          onPress={props.seconPress}>
          <Text style={styles.secButtonText}>{props.secButton}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}

export default ModalRed;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  primaryText: {
    color: '#636266',
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    letterSpacing: -0.4,
    padding: 12,
    margin: 12,
    textAlign: 'center'
  },
  primaryTitle: {
    color: '#181721',
    fontFamily: 'CircularStd-Book',
    fontSize: 24,
    letterSpacing: -0.4,
    paddingTop: 12,
    marginTop: 24,
    textAlign: 'center'
  },
  primaryButton: {
    padding: 16,
    margin: 12,
    marginHorizontal: 60,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0284F',
    borderRadius: 4,
    elevation: 16,
    shadowColor: "#FF88A1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 6
  },
  primaryButtonText: {
    fontFamily: 'CircularStd-Book',
    color: 'white'
  },
  secButton: {
    padding: 16,
    marginHorizontal: 60,
    marginBottom: 32,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D0D4D6'
  },
  secButtonText: {
    fontFamily: 'CircularStd-Book',
    color: '#181721'
  }
})