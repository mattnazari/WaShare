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
import PaymentHistory from './comps/PaymentHistory';
import Forgot from './comps/Forgot';
import Contact from './comps/Contact';
import Verification from './comps/Verification';
import Reset from './comps/Reset';
import Lab from './comps/Lab';

const AppStackNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    Onboarding: { screen: Onboarding },
    ExtendMachine: { screen: ExtendMachine },
    Notification: { screen: Notification },
    Login: { screen: Login },
    Payment: { screen: PaymentHistory },
    Forgot: { screen: Forgot },
    Contact: { screen: Contact },
    Verification: { screen: Verification },
    Reset: { screen: Reset },
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
    'Payment Info': { screen: PaymentHistory },
    Help: { screen: Onboarding },
    Lab: { screen: Lab },
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