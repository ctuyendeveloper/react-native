import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <View style={styles.body}>
      {/* <Text>login</Text> */}
      <View style={styles.view0}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
      </View>
      <View style={styles.view00}>
        <View style={styles.view3}></View>
      </View> 
      <View style={styles.view0}>
        <View style={styles.view4}></View>
        <View style={styles.view5}></View>
      </View>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  body: {
    // flexDirection: 'row', // x-axis
    flexDirection: 'column', // y-axis default
    // vị trí của các item trong flexbox
    // justifyContent: theo direction
    // justifyContent: 'center', // canh giữa
    // justifyContent: 'flex-start', default
    // justifyContent: 'flex-end',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    padding: 16,
  },
  view0:
  {
    flexDirection: 'row', // x-axis
    justifyContent: 'space-between',
  },
  view00:
  {
    flexDirection: 'row', // x-axis
    justifyContent: 'center', // canh giữa
  },

  view1:
  {
    backgroundColor: 'red', width: 50, height: 50
  },
  view2:
  {
    backgroundColor: 'blue', width: 50, height: 50
  },
  view3:
  {
    backgroundColor: 'green', width: 50, height: 50
  },
  view4:
  {
    backgroundColor: 'purple', width: 50, height: 50
  },
  view5:
  {
    backgroundColor: 'orange', width: 50, height: 50
  },
})