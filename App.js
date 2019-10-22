import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//import screens that need to be added to the navigator stack or drawer
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

const AppDrawerNavigator = createDrawerNavigator(
  { //add screens here that go into the hamburger menu
    Home: { screen: AppNavigator },
    Onboarding: { screen: Onboarding },
    //TO-DO
    //replace these next placeholder screens
    //TO-DO
    'Report Machines': { screen: Onboarding },
  })

const AppContainer = createAppContainer(AppDrawerNavigator);

const App = () => {
  return (
    <AppContainer />
  )
};

export default App;