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
import { UserProvider } from './src/ASM/components/User/UserContext';
import { NewsProvider } from './src/ASM/components/News/NewsContext';
import AppNavigation from './src/ASM/components/navigations/AppNavigation';
import Suongsuong from './src/LAB/suongsuong';


function App(): JSX.Element {

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


      {/* <UserProvider>
        <NewsProvider>
        <AppNavigation/>
        </NewsProvider>
      </UserProvider> */}


      {/* <Detail></Detail> */}
            {/* <test/> */}
      {/* <LAB8a /> */}
      {/* <LAB6a /> */}
      {/* <LAB5 /> */}
      {/* <LAB4a /> */}
      {/* <LAB3c /> */}
      {/* <LAB3b /> */}
      {/* <Suongsuong/> */}

    </SafeAreaView>

  );
}

export default App;
