import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Screen1 = () => {
  const [getname, setname] = useState('NguyenNam')
  const [color, setColor] = useState('blue')

  const changle = () => {
    setname('tuoilon')
    console.log(getname)
  }
  const changlecl = () => {
    const arr = ['red', 'green', 'blue', 'yellow', 'pink', 'black']
    const ramdom = Math.floor(Math.random() * arr.length);
    setColor(arr[ramdom])
  }
  return (
    <View>
      <View style={{ backgroundColor: color, width: 50, height: 100 }}>

      </View>
      <Text>Screen1</Text>
      <Text style={{ fontSize: 50 }}> {getname} </Text>
      <Button title="Test Doi ten" onPress={changle} />
      <Button title="Test Doi mau" onPress={changlecl} />
    </View>
  )
}

export default Screen1