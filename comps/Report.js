import React from 'react'
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Report = () => {
  return (
    <View>
      <Header currentTab={'Report'} />
      <Footer currentTab={'Report'} />
    </View>
  );
}

export default Report;