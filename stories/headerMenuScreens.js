import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Report from '../comps/Report';
import PaymentHistory from '../comps/PaymentHistory';
import Payment from '../comps/Payment';
import Notifications from '../comps/Notification';

storiesOf("Header Menu Screens", module)
.add('Report', ()=>{
    return <Report/>
}) 
.add('PaymentHistory', ()=>{
    return <PaymentHistory/>
}) 
.add('PaymentInformation', ()=>{
    return <Payment/>
}) 

.add('Notifications', ()=>{
    return <Notifications/>
}) 

// none of these work properly cause they already have react navigation
