import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/LoginStyles';
import { Back } from './SVGComps';
import axios from 'axios';

let address;
let usercode;

const Login = props => {

  const CreateUser = async () => {
    //fetch database to create users
    let obj = {
      key: 'users_create',
      data: {
        address: address,
        usercode: usercode
      }
    }
    let r = await axios.post('http://localhost:3001/post', obj)
    console.log(r.data)
  }

  const ReadUser = async () => {
    var obj = {
      key: 'users_read',
      data: {}
    }

    let r = await axios.post('http://localhost:3001/post', obj)
    let dbusers = JSON.parse(r.data.body)
    console.log('read', dbusers)
  }

  React.useEffect(() => {
    ReadUser()
  }, [])

  return (
    <View style={styles.background}>

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
          placeholder='420 LeBron Street'
          onChangeText={(text) => {
            address = text
          }}
        />
        <Text style={styles.inputTitle}>6 Digit Code</Text>
        <TextInput
          style={styles.txtInput}
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
            CreateUser()
            props.navigation.navigate('Main')
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default Login;