import React, { useState, useEffect } from 'react'
import { Animated, ScrollView, View, Text, Button, TextInput, AsyncStorage, Image, InteractionManager } from 'react-native';

const ImageCard = props => {
  const [dim] = useState(new Animated.Value(100))

  let newDim = dim.interpolate({
    inputRange: [100, 125, 150, 180, 300],
    outputRange: [100, 300, 50, 5000, 300]
  })

  return (
    <View>
      <Text>{props.title}</Text>
      <Animated.View style={{ width: newDim, height: newDim }} >
        <Image source={{ uri: props.item.url }} style={{ width: '100%', height: '100%' }} />
      </Animated.View>
      <Button
        title='Expand'
        onPress={() => {
          Animated.timing(
            dim,
            {
              toValue: 300,
              duration: 1000
            }
          ).start()

          InteractionManager.runAfterInteractions(() => {
            Animated.timing(
              dim,
              {
                toValue: 100,
                duration: 1000,
                delay: 1000
              }
            ).start()
          })
        }}
      />
    </View>
  )
}

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
    const resp = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
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
        {img.map((item, index) => <ImageCard item={item} title={'Cat ' + (index + 1)} />)}
      </ScrollView>
    </View>
  );
}

export default Lab;