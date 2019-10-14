import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={()=>{
          props.setName('Book')
        }}>
        <Text>BOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          props.setName('Alert')
        }}>
        <Text>ALERT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          props.setName('Report')
        }}>
        <Text>REPORT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header;