/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, Text
} from 'react-native';
import Screen1 from './src/demo/Screen1';
import Screen2 from './src/demo/Screen2';
import Lab2 from './src/LAB/lab2';
import Screen3 from './src/demo/Screen3';
import Login1 from './src/ASM/components/User/Login';
import Register from './src/ASM/components/User/Register';
import Home from './src/ASM/components/News/Home';
import Screen4 from './src/demo/Screen4';
import Screen5 from './src/demo/Screen5';
import LAB3a from './src/LAB/LAB3/Screen1';
import LAB3b from './src/LAB/LAB3/Screen2';
import LAB3c from './src/LAB/LAB3/Screen3';
import LAB4a from './src/LAB/LAB4/Screen1';
import LAB4b from './src/LAB/LAB4/Screen2';
import LAB5 from './src/LAB/LAB5/Screen1';
import LAB8 from './src/LAB/LAB8/Screen1';
import LAB8a from './src/LAB/LAB8/main';
import LAB6a from './src/LAB/LAB6/Screen1';
import LAB6b from './src/LAB/LAB6/Screen2';
import LAB6c from './src/LAB/LAB6/Screen4';
import { UserProvider } from './src/ASM/components/User/UserContext';
import { NewsProvider } from './src/ASM/components/News/NewsContext';
import AppNavigation from './src/ASM/components/navigations/AppNavigation';
import Suongsuong from './src/LAB/suongsuong';
import Full from './src/LAB/fullscreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator  } from '@react-navigation/native-stack'




function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Screen1/>
         <Screen2>
         <Screen1/>
         </Screen2> */}
      {/* <Screen3/> */}
      {/* <Lab2/> */}
      {/* <Login1></Login1> */}
      {/* <Screen5/> */}
      {/* <Register></Register> */}


      <UserProvider>
        <NewsProvider>
        <AppNavigation/>
        </NewsProvider>
      </UserProvider>

      {/* 
      <Detail></Detail> */}
      {/* <test/> */}
      {/* <LAB8a /> */}
      {/* <LAB6a /> */}


      {/* <LAB5 /> */}
      {/* <LAB4a /> */}
      {/* <Home /> */}
      {/* <LAB3b /> */}
      {/* <Suongsuong/> */}

      {/* <Suongsuong/> */}
      {/* <Home /> */}
      {/* <LAB5 /> */}
      {/* <LAB6a /> */}
      {/* <LAB8a /> */}

      
      {/* <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='full' component={Full} />
                <Stack.Screen name='so1' component={LAB8a} />
                <Stack.Screen name='so2' component={LAB6a} />
                <Stack.Screen name='so3' component={LAB5} />
                <Stack.Screen name='so4' component={Home} />
                <Stack.Screen name='so5' component={Suongsuong} />
            </Stack.Navigator>
        </NavigationContainer> */}

    </SafeAreaView>

  );
}

export default App;
