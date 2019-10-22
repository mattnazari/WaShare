import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import screens that need to be added to the navigator stack
import Main from './comps/Main';
import Onboarding from './comps/Onboarding';
import ExtendMachine from './comps/ExtendMachine';

const AppNavigator = createStackNavigator(
  { //add screens here
    Main: { screen: Main },
    Onboarding: { screen: Onboarding },
    ExtendMachine: { screen: ExtendMachine },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Onboarding',
  });

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer />
  )
};

export default App;