
import React from 'react';
import navigationstring from '../constants/navigationstring';
import {
  CHANGEPASSWORD,
  FORGOTPASSWORD,
  LOGIN,
  ONBOARDING,
  OTP,
  SETTING,
  SIGNUP,
  SPLASH,
  EDITPROFILE,
  ITEMDETAILSCREEN,
  CHECKOUTSCREEN,
 
} from '../screens';
import AdminDelete from '../screens/AdminDelete/AdminDelete';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import BOTTOMTABHOME from './BOTTOMTAB'
import ADMINBOTTOMTAB from './ADMINBOTTOMTAB';
import Mechanical from '../screens/Mechanical/Mechanical';
import Electrical from '../screens/Electrical/Electrical';
import Chemical from '../screens/Chemical/Chemical';
import Ninth from '../screens/Ninth/Ninth';
import Tenth from '../screens/Tenth/Tenth';
import Part1 from '../screens/Part1/Part1';
import Part2 from '../screens/Part2/Part2';
import ComputerScience from '../screens/ComputerScience/ComputerScience';
import Otherbooks from '../screens/Otherbooks/Otherbooks';
import Charity from '../screens/Charity/Charity';
import Display from '../screens/Charity/Display';
import AdminModify from '../screens/AdminModify/AdminModify';
import Buy from '../screens/Buy/Buy';
import AdminHome from '../screens/Admin/AdminHome';


const Stack = createStackNavigator();

function Route() {
  return (
     <Stack.Navigator
      initialRouteName={navigationstring.SPLASH}
      screenOptions={{
        animationEnabled: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        headerMode: 'screen',
      }}>
        <Stack.Screen name={navigationstring.CHANGEPASSWORD} component={CHANGEPASSWORD}/>
        <Stack.Screen name={navigationstring.FORGOTPASSWORD} component={FORGOTPASSWORD} />
        <Stack.Screen  name={navigationstring.LOGIN} component={LOGIN} />
        <Stack.Screen name={navigationstring.ONBOARDING} component={ONBOARDING}/>
        <Stack.Screen name={navigationstring.OTP} component={OTP} />
        <Stack.Screen name={navigationstring.SETTING} component={SETTING} />
        <Stack.Screen name={navigationstring.SIGNUP} component={SIGNUP} />
        <Stack.Screen name={navigationstring.SPLASH} component={SPLASH} />
        <Stack.Screen name={navigationstring.ITEMDETAIL} component={ITEMDETAILSCREEN} />
        <Stack.Screen name={navigationstring.BOTTOMTABHOME} component={BOTTOMTABHOME} />
        <Stack.Screen name={navigationstring.EDITPROFILE} component={EDITPROFILE} />
        <Stack.Screen name={navigationstring.MECHANICAL} component={Mechanical} />
        <Stack.Screen name={navigationstring.CHECKOUT} component={CHECKOUTSCREEN} />
        <Stack.Screen name={navigationstring.ELECTRICAL} component={Electrical} />
        <Stack.Screen name={navigationstring.NINTH} component={Ninth} />
        <Stack.Screen name={navigationstring.TENTH} component={Tenth} />
        <Stack.Screen name={navigationstring.CHEMICAL} component={Chemical} />
        <Stack.Screen name={navigationstring.PART1} component={Part1} />
        <Stack.Screen name={navigationstring.PART2} component={Part2} />
        <Stack.Screen name={navigationstring.COMPUTERSCIENCE} component={ComputerScience} />
        <Stack.Screen name={navigationstring.OTHERBOOKS} component={Otherbooks} />
        <Stack.Screen  name={navigationstring.CHARITY} component={Charity} />
        <Stack.Screen  name={navigationstring.DISPLAY} component={Display} />
        <Stack.Screen  name={navigationstring.BUY} component={Buy} />
{/* Admin Screens */}
        <Stack.Screen name={navigationstring.ADMINBOTTOMTAB} component={ADMINBOTTOMTAB} />
        <Stack.Screen name={navigationstring.ADMINDELETE} component={AdminDelete} />
        <Stack.Screen name={navigationstring.ADMINMODIFY} component={AdminModify} />
        <Stack.Screen name={navigationstring.ADMINHOMR} component={AdminHome} />
        
      </Stack.Navigator>
      
  );
};

export default Route;
