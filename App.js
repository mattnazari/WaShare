import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerComponent } from './comps/DrawerComponent'
import Icon from 'react-native-vector-icons/MaterialIcons'

//first import comps that need to be added to the navigator or drawer
import Main from './comps/Main';
import Onboarding from './comps/Onboarding';
import ExtendMachine from './comps/ExtendMachine';
import Notification from './comps/Notification';
import Login from './comps/Login';
import Report from './comps/Report';
import ModalScreen from './comps/ModalScreen';
import PaymentHistory from './comps/PaymentHistory';
import Forgot from './comps/Forgot';
import Contact from './comps/Contact';
import Verification from './comps/Verification';
import Reset from './comps/Reset'

const AppStackNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    Onboarding: { screen: Onboarding },
    ExtendMachine: { screen: ExtendMachine },
    ModalScreen: { screen: ModalScreen },
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
    initialRouteName: 'Onboarding',
    headerMode: 'none',
  });

const iconDim = 24
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name='home' size={iconDim} color={tintColor} />,
      }
    },
    'Report Machines': {
      screen: Report,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name='report-problem' size={iconDim} color={tintColor} />,
      }
    },
    'Payment Info': {
      screen: PaymentHistory,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name='credit-card' size={iconDim} color={tintColor} />,
      }
    },
    Help: {
      screen: Onboarding,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Icon name='help-outline' size={iconDim} color={tintColor} />,
      }
    },
    //add screens here that go into the hamburger menu
  },
  {
    hideStatusBar: true,
    statusBarAnimation: 'slide',
    drawerBackgroundColor: 'rgba(255, 255, 255, 0)',
    contentComponent: DrawerComponent,
    contentOptions: {
      activeBackgroundColor: null,
      activeTintColor: '#506BFB',
      iconContainerStyle: {
        opacity: 1
      },
      labelStyle: {
        fontSize: 16,
        fontFamily: 'CircularStd-Medium',
      },
    }
  })

const AppContainer = createAppContainer(AppDrawerNavigator);

const App = () => {
  const [data, setData] = useState({})

  function SetData(obj){
    var d = obj
    setData(d)
    console.log('APP DATA top level:', data)
  }

  return (
    <AppContainer
      screenProps={{ data: data, SetData: SetData }} />
  )
};

export default App;