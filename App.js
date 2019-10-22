import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//import screens that need to be added to the navigator stack or drawer
import Main from './comps/Main';
import Onboarding from './comps/Onboarding';
import ExtendMachine from './comps/ExtendMachine';

const AppStackNavigator = createStackNavigator(
  { 
    Main: { screen: Main },
    Onboarding: { screen: Onboarding },
    ExtendMachine: { screen: ExtendMachine },
    //add screens here that go into normal stack navigation
  },
  {
    headerMode: 'none',
    initialRouteName: 'Onboarding',
  });

const AppDrawerNavigator = createDrawerNavigator(
  { 
    Home: { screen: AppStackNavigator },
    Onboarding: { screen: Onboarding },
    //TO-DO
    //replace these next placeholder screens
    //TO-DO
    'Report Machines': { screen: Onboarding },
    'Payment Info': { screen: Onboarding },
    Help: { screen: Onboarding },
    //add screens here that go into the hamburger menu
  },
  {
    hideStatusBar: true,
    statusBarAnimation: 'slide'
  })

const AppContainer = createAppContainer(AppDrawerNavigator);

const App = () => {
  return (
    <AppContainer />
  )
};

export default App;