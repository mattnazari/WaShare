import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>BOOK</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>ALERT</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>REPORT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header;