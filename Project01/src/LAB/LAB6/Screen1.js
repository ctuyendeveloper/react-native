import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

// const Tab2 = createMaterialTopTabNavigator();
// const Stack = createNativeStackNavigator();
const Tab2 = createMaterialTopTabNavigator();
  const Stack = createNativeStackNavigator();
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Screen2}/>
        <Stack.Screen name='Forgot' component={Screen4}/>
      </Stack.Navigator>
    );
  }



const Screen1 = () => {


  return (
    <NavigationContainer style={styles.body}>
      <View style={styles.hinh}>
      <Image source={require('../../../media_phainop/toplab6.png')} />
      </View>
      <Tab2.Navigator>
        <Tab2.Screen name="Login" component={HomeStack}  />
        <Tab2.Screen name="Sign-up" component={Screen3} />
      </Tab2.Navigator>
    </NavigationContainer>
  )
}

export default Screen1

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
  },
  hinh: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
})