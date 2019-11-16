import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MachineContainer from './MachineContainer';
import Footer from './Footer';
import Header from './Header';
import Status from './Status';
import * as Animatable from 'react-native-animatable';

const Main = props => {
  const userdata = props.navigation.getParam('data', 'ERROR')
  useEffect(() => {
    console.log('currently logged in as user_id:', props.navigation.getParam('id', 'COULD NOT RETRIEVE ID'))
    console.log('reading userdata for user_id:', userdata.id, userdata)

    //have to run this function twice in order to set the data at the top level
    //might be a bug ??
    props.screenProps.SetData(userdata)
    props.screenProps.SetData(userdata)
  }, [])

  //handles machine selection
  const [selected, setSelected] = useState([]);
  //handle styling of current page (home screen)
  const [currentTab, setCurrentTab] = useState('Book');

  function pushSelect(id) {
    console.log('INDIVIDUAL machine ' + JSON.stringify(id));
    var arr = selected;
    arr.push(id);
    setSelected(arr);
    console.log(selected)
  }

  function spliceSelect(id) {
    console.log('INDIVIDUAL machine ' + id)
    var arr = selected;
    arr.splice(id, 1);
    setSelected(arr)
    console.log(selected)
  }

  //default view of home page
  let home = (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MachineContainer
          currentTab={currentTab}
          selected={selected}
          type={'Washer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect}
          userdata={userdata} />
      </View>
      <View style={{ flex: 1 }}>
        <MachineContainer
          currentTab={currentTab}
          selected={selected}
          type={'Dryer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect}
          userdata={userdata} />
      </View>
      <Animatable.View animation='fadeInUp' delay={750} easing='ease-in'>
        <Footer
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          selected={selected}
          setSelected={setSelected}
          userdata={userdata} />
      </Animatable.View>
    </View>
  )

  //show status component only when selected in tab bar
  if (currentTab == 'Status') {
    home = (
      <Status
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        userdata={userdata}
        screenProps={props.screenProps} />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Animatable.View animation='fadeInDown' duration={750} delay={125} easing='ease-in'>
        <Header
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          setSelected={setSelected}
          selected={selected}
          userdata={userdata}
          screenProps={props.screenProps} />
      </Animatable.View>
      {home}
    </View>
  )
};

export default Main;