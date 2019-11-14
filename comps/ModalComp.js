import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

// this modal component accepts a few properties
// title, desc props should be sent as strings
// every onpress props should be sent as functions
// primaryonPress prop will typically be the main action taking place for the modal
// color prop determines the color of the primary call to action button, create more as necessary

const ModalRed = props => {
  let primaryButtonColor
  switch (props.color) {
    case 'red':
      primaryButtonColor = styles.primaryButtonRed
      break;
    case 'purple':
      primaryButtonColor = styles.primaryButtonPurple
      break;
    case 'blue':
      primaryButtonColor = styles.primaryButtonBlue
      break;
  }

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
          style={[styles.primaryButton, primaryButtonColor]}
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
  primaryButtonRed: {
    backgroundColor: '#E0284F',
    shadowColor: "#FF88A1",
  },
  primaryButtonPurple: {
    backgroundColor: '#6E41DA',
    shadowColor: "#506AFB",
  },
  primaryButtonBlue: {
    backgroundColor: '#506BFB',
    shadowColor: "#506AFB",
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