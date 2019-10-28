import React from 'react'
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const ModalScreen = props => {
  return (
    <TouchableOpacity
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onPress={() => {
        props.navigation.goBack()
      }}>
      <Image
        source={props.navigation.getParam('image')}
        style={styles.image} />
      <Text style={styles.title}>{props.navigation.getParam('title')}</Text>
      <Text style={styles.desc}>{props.navigation.getParam('desc')}</Text>
    </TouchableOpacity>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    margin: 30
  },
  title: {
    fontFamily: 'CircularStd-Black',
    fontSize: 32,
    letterSpacing: -0.8,
    color: '#0D0035'
  },
  desc: {
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    letterSpacing: -0.2,
    color: '#595959'
  }
})