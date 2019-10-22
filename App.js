import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//first import comps that need to be added to the navigator stack as a screen
import Main from './comps/Main';
import Onboarding from './comps/Onboarding';
import ExtendMachine from './comps/ExtendMachine';
import Notification from './comps/Notification';
import Login from './comps/Login';

const AppNavigator = createStackNavigator(
  { //then add those comps as screens here
    Main: { screen: Main },
    Onboarding: { screen: Onboarding },
    ExtendMachine: { screen: ExtendMachine },
    Notification: { screen: Notification },
    Login: { screen: Login },
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