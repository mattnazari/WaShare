import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/LoginStyles';
import { Back } from './SVGComps';
import axios from 'axios';
import ModalSingleCTA from './ModalSingleCTA';

let address = '';
let usercode = '';
const Login = props => {
  const [failedModalVisible, setFailedModalVisible] = useState(false)
  useEffect(() => {
    address = '';
    usercode = '';
  }, [])

  const ReadAuthUser = async (id) => {
    var obj = {
      key: 'users_read',
      data: {
        id: id
      }
    }

    let r = await axios.post('http://localhost:3001/post', obj)
    let user = JSON.parse(r.data.body)
    let data = user.data[0]
    console.log('reading the authorized user', data)
    props.navigation.navigate('Main', { id: data.id, data: data })
  }

  const Auth = async () => {
    var obj = {
      key: "users_auth",
      data: {
        address: address,
        usercode: usercode
      }
    }
    var r = await axios.post("http://localhost:3001/post", obj);
    var result = JSON.parse(r.data.body)
    if (result.status) {
      console.log(result.msg, 'the user_id is:', result.id)
      ReadAuthUser(result.id)
    }
    else {
      setFailedModalVisible(!failedModalVisible)
      //auth failed
      //backend currently throws errors so this isn't possible to do in the front-end
    }
  }

  return (
    <View style={styles.background}>
      <ModalSingleCTA
        isVisible={failedModalVisible}
        color={'blue'}
        onBackdropPress={() => {
          setFailedModalVisible(!failedModalVisible)
        }}
        onSwipeComplete={() => {
          setFailedModalVisible(!failedModalVisible)
        }}
        title={`Login failed.`}
        desc={`Incorrect address and/or digit code. Please try again.`}
        primaryonPress={() => {
          setFailedModalVisible(!failedModalVisible)
        }}
        primaryButton={'Dismiss'} />
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack()
          }}>
          <Back fill={'black'} height={25} width={25} />
        </TouchableOpacity>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.welcomeText}>Welcome,</Text>
          <Text style={styles.header}>Where do you live?</Text>
        </View>
      </View>

      <View>
        <Text style={styles.inputTitle}>Address</Text>
        <TextInput
          style={styles.txtInput}
          autoCapitalize='none'
          placeholder='420 LeBron Street'
          onChangeText={(text) => {
            address = text
          }}
        />
        <Text style={styles.inputTitle}>6 Digit Code</Text>
        <TextInput
          style={styles.txtInput}
          autoCapitalize='none'
          maxLength={6}
          placeholder='42069X'
          onChangeText={(text) => {
            usercode = text
          }}
        />
        <TouchableOpacity
          style={styles.forget}
          onPress={() => {
            props.navigation.navigate('Forgot')
          }}
        >
          <Text style={styles.forgetText}>Forgot Digitcode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.login}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // TODO
            // needs if statement to check if address and digitcode are filled in
            Auth()
          }}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default Login;