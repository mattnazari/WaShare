import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Onboarding from '../comps/Onboarding';
import Login from '../comps/Login';
import  Forgot from '../comps/Forgot';
import Contact from '../comps/Contact';
import Verifictaion from '../comps/Verification';
import Reset from '../comps/Reset';

storiesOf("Introduction Screens", module)
.add('Onboarding', ()=>{
    return <Onboarding/>
})
.add('Login', ()=>{
    return <Login/>
})
.add('Forgot', ()=>{
    return <Forgot/>
})
.add('Contact', ()=>{
    return <Contact/>
})
.add('Verification', ()=>{
    return <Verifictaion/>
})
.add('Reset', ()=>{
    return <Reset/>
})