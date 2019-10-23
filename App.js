import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//import screens that need to be added to the navigator stack or drawer
//first import comps that need to be added to the navigator stack as a screen
import Main from './comps/Main';
import Onboarding from './comps/Onboarding';
import ExtendMachine from './comps/ExtendMachine';
import Notification from './comps/Notification';
import Login from './comps/Login';
import Report from './comps/Report';

const AppStackNavigator = createStackNavigator(
  { 
    Main: { screen: Main },
    Onboarding: { screen: Onboarding },
    ExtendMachine: { screen: ExtendMachine },
    Notification: { screen: Notification },
    Login: { screen: Login },
    //add screens here that go into normal stack navigation
  },
  {
    headerMode: 'none',
    initialRouteName: 'Onboarding',
  });

const AppDrawerNavigator = createDrawerNavigator(
  { 
    Home: { screen: AppStackNavigator },
    //TO-DO
    //replace these next placeholder screens
    //TO-DO
    'Report Machines': { screen: Report },
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