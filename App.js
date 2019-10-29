import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

//first import comps that need to be added to the navigator or drawer
import Main from './comps/Main';
import Onboarding from './comps/Onboarding';
import ExtendMachine from './comps/ExtendMachine';
import Notification from './comps/Notification';
import Login from './comps/Login';
import Report from './comps/Report';
import PaymentHistory from './comps/PaymentHistory';

const CustomDrawerContentComponent = props => (
  <ScrollView style={styles.container}>
    <SafeAreaView
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor:'white',
  },
});

const AppStackNavigator = createStackNavigator(
  { 
    Main: { screen: Main },
    Onboarding: { screen: Onboarding },
    ExtendMachine: { screen: ExtendMachine },
    Notification: { screen: Notification },
    Login: { screen: Login },
    Payment: { screen: PaymentHistory}
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
    //add screens here that go into the hamburger menu
  },
  {
    hideStatusBar: true,
    statusBarAnimation: 'slide',
    drawerBackgroundColor: 'rgba(255, 255, 255, 0)',
    contentComponent: CustomDrawerContentComponent
  })

const AppContainer = createAppContainer(AppDrawerNavigator);

const App = () => {
  return (
    <AppContainer />
  )
};

export default App;