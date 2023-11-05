import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Home2 from './Home2';
import Detail from './Detail';
import Share from './Share';
import Profile from './Profile';
import Adds from './Adds';
import Edit from './Edit';
import Profile2 from './Profile2';

const tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

  const HomeStackDetail = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home2}/>
        <Stack.Screen name='Detail' component={Detail}/>
      </Stack.Navigator>
    );
  }
  const HomeStackProfile = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Profile' component={Profile2}/>
        <Stack.Screen name='Add' component={Adds}/>
        <Stack.Screen name='Edit' component={Edit}/>
      </Stack.Navigator>
    );
  }

const NewsNavigation = () => {
    const screenOptions = ({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
        },
        tabBarLabel: ({focused, color, size}) => {
        },
    })
  return (
    <tabs.Navigator screenOptions={{headerShown: false}} >
        <tabs.Screen name='Home' component={HomeStackDetail}/>
        <tabs.Screen name='Profile' component={HomeStackProfile}/>
    </tabs.Navigator>
  )
}

export default NewsNavigation