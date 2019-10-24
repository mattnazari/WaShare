import React, { useState } from 'react'
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import MachineContainer from './MachineContainer';
import { washers, dryers } from './Data';

const Report = () => {
  const currentTab = 'Report';
  const [selected, setSelected] = useState([]);

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

  return (
    <View>
      <Header currentTab={currentTab} />
      <View style={{ marginTop: 20 }}>
        <MachineContainer
          selected={selected}
          setSelected={setSelected}
          currentTab={currentTab}
          machines={washers}
          type={'Washer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect}
        />
        <MachineContainer
          selected={selected}
          setSelected={setSelected}
          currentTab={currentTab}
          machines={dryers}
          type={'Dryer'}
          pushSelect={pushSelect}
          spliceSelect={spliceSelect}
        />
      </View>
      <Footer currentTab={currentTab} />
    </View>
  );
}

export default Report;