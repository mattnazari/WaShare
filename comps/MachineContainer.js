import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Machine from './Machine';
import styles from '../styles/MachineStyles';
import axios from 'axios';

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
      <Text style={styles.title}>{props.type} machines</Text>
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
            return <Machine key={index}
              id={machine.id}
              type={machine.machine_type}
              status={machine.status}
              currentTab={props.currentTab}
              selected={props.selected}
              pushSelect={props.pushSelect}
              spliceSelect={props.spliceSelect}
              machineAvailability={props.machineAvailability} />
          }
          )}
        </ScrollView>
      </View>
    </View>
  )
}

export default MachineContainer;