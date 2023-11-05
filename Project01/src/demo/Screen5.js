import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen6 from './Screen6';
import Screen7 from './Screen7';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tab2 = createMaterialTopTabNavigator();

const Screen5 = () => {
    return (
        <NavigationContainer>
            <Tab2.Navigator>
                <Tab2.Screen name="Home" component={Screen6} />
                <Tab2.Screen name="Settings" component={Screen7} />
            </Tab2.Navigator>
        </NavigationContainer>
    )
}

export default Screen5

const styles = StyleSheet.create({})