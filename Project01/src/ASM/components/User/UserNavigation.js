import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator();
import Login from './Login';
import Register from './Register';
import Profile2 from '../News/Profile2';

// thiếu bottom navigation

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login2' component={Login}/>
        <Stack.Screen name='Register2' component={Register}/>
    </Stack.Navigator>
  )
}

export default UserNavigation
