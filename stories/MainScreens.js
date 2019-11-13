import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Main from '../comps/Main';
import Status from '../comps/Status';
import ExtendMachine from '../comps/ExtendMachine';

storiesOf("Main Screens", module)
.add('Main', ()=>{
    return <Main/>
}) 
.add('Status', ()=>{
    return <Status/>
}) 
.add('ExtendMachine', ()=>{
    return <ExtendMachine/>
}) 