import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Button, TextInput, AsyncStorage, Image } from 'react-native';

const Lab = () => {
  const [name, setName] = useState('')
  const [img, setImg] = useState([])

  const handleButton = async () => {
    //loading animation
    await AsyncStorage.setItem('name', name)
    //stop loading animation
  }

  const getName = async () => {
    const a_name = await AsyncStorage.getItem('name')
    console.log(a_name)
    if (a_name !== null && a_name !== '') {
      setName(a_name)
    }
  }

  const getCats = async () => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search?limit=100')
    const json = await resp.json()
    console.log(json)
    setImg(json)
  }

  useEffect(() => {
    getName()
    getCats()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 100 }}>
      <TextInput
        placeholder='type your name here'
        onChangeText={(text) => {
          setName(text)
          console.log('typing ' + text)
        }}
      />
      <Button
        title='Store Name'
        onPress={() => {
          console.log('pressed')
          handleButton()
        }}
      />
      <Text>Hello, {name}</Text>
      <ScrollView>
        {img.map((item) => <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />)}
      </ScrollView>
    </View>
  );
}

export default Lab;