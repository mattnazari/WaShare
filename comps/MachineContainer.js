import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Machine from './Machine';
import styles from '../styles/MachineStyles';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

const MachineContainer = props => {
  const [machines, setMachines] = useState([])

  const ReadMachines = async () => {
    var obj = {
      key: 'machines_read',
      data: {}
    }

    let r = await axios.post('http://localhost:3001/post', obj)
    let dbmachines = JSON.parse(r.data.body)
    console.log('read', dbmachines)

    const filterArr = dbmachines.data.filter(item => {
      return item.machine_type == props.type
    })

    setMachines(filterArr)
    console.log('reading machines array state', machines)
  }

  useEffect(() => {
    ReadMachines()
  }, [])

  return (
    <View>
      <Animatable.Text style={styles.title} animation='fadeIn' delay={250}>{props.type} machines</Animatable.Text>
      <View style={{ marginTop: -20 }}>
        <ScrollView
          horizontal
          directionalLockEnabled
          decelerationRate={0}
          snapToAlignment={"start"}
          snapToInterval={150}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {machines.map((machine, index) => {
            return <Animatable.View key={index}
              animation='fadeInRight'
              easing='ease-in'
              duration={750}
              delay={index * 300}>
              <Machine key={index}
                id={machine.id}
                num={index}
                type={machine.machine_type}
                status={machine.status}
                currentTab={props.currentTab}
                selected={props.selected}
                pushSelect={props.pushSelect}
                spliceSelect={props.spliceSelect} />
            </Animatable.View>
          }
          )}
        </ScrollView>
      </View>
    </View>
  )
}

export default MachineContainer;