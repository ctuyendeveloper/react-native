import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Lab78sc2';
const Stack = createNativeStackNavigator();


const main = () => {
    // const { navigation } = props;
    return (
        // <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Screen1} />
                <Stack.Screen name='Forgot' component={Screen2} />
            </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default main

const styles = StyleSheet.create({})