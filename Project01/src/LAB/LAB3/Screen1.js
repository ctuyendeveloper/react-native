import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Screen1 = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.tittle1}>Make a new friend!</Text>
      <Text style={styles.tittle2}>Adopt a pet today</Text>
      <View style={styles.view1}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonlogin}>Lets go!</Text>
        </Pressable>
      </View>
      <View style={styles.view2}>
        <Image style={styles.hinh} source={require('../../../media_phainop/hinh11lab3.png')} />
      </View>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#DF0054',
    width: '100%',
    height: '100%',
  },
  view1: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view2: {
    marginTop: 190,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tittle1: {
    textAlign: 'center',
    marginTop: 80,
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 23,
    lineHeight: 28,
    color: '#FFFFFF',
  },
  tittle2: {
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 27,
    color: '#FFFFFF',
  },
  button: {

    width: 148,
    height: 40,
    backgroundColor: '#FFB228',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonlogin: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  hinh: {
    width: 591,
    height: 542,
  },
  
})