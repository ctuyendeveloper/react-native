import React, {useState, createContext} from 'react'
import { login } from './UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const onLogin1 = async (email, password) => {
    try {
      const result = await login(email, password);
      console.log('Login result: ', result);
      if (result.statusCode == 200)
      {
        setUser(result.data.user);  
        await AsyncStorage.setItem('token', result.data.token)
        return true;
      }
    } catch (error) {
      console.log('login error: ', error)
    }
    return false;
  }
  return (
    <UserContext.Provider value={{user,setUser, onLogin1}}>
      {children}
    </UserContext.Provider>
  )
}