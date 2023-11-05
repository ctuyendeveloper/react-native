import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { UserContext } from '../User/UserContext'
import UserNavigation from '../User/UserNavigation'
import NewsNavigation from '../News/NewsNavigation'


const AppNavigation = () => {
  const {user} = useContext(UserContext);
  return (
      <NavigationContainer>
        {user ? <NewsNavigation/> : <UserNavigation/>}
      </NavigationContainer>
  )
}

export default AppNavigation