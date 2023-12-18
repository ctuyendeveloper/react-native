import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.view1title}>Register</Text>
        <View style={styles.view2}>
          <View style={styles.itemfbgg}>
            <Image style={styles.icon2fb} source={require('../../../media_phainop/gg.png')} />
          </View>
          <View style={styles.itemfbgg}>
            <Image style={styles.icon2gg} source={require('../../../media_phainop/fb.png')} />
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.homeview3}>
          <TextInput style={styles.view3tittle3} placeholder='Full Name'></TextInput>
        </View>
        <View style={styles.homeview3}>
          <TextInput style={styles.view3tittle3} placeholder='Mobile Number'></TextInput>
        </View>
        <View style={styles.homeview3}>
          <TextInput style={styles.view3tittle3} placeholder='Password'></TextInput>
        </View>
        <View style={styles.homeview3}>
          <TextInput style={styles.view3tittle3} placeholder='Confirm Password'></TextInput>
        </View>
      </View>
      <View style={styles.view4}>
      <Pressable style={styles.button1}>
        <Text style={styles.buttonlogin1}>Sign-up</Text>
      </Pressable>
      {/* <Text style={styles.view4title}>Already a Member? <Text style={{ fontWeight: 'bold'}}>Login</Text></Text> */}
      </View>
    </View>
      </ScrollView>
  )
}

export default Screen3

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },
  view1: {
    padding: 16,
    // marginLeft: 16,
    // marginTop: 20,
    // marginLeft: 28,
    // marginTop: 42,
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  view1title: {
    marginTop: 16,
    fontWeight: 500,
    fontSize: 34,
    lineHeight: 34,
    fontStyle: 'normal',
    color: '#FE724C',
  },
  view2: {
    justifyContent: 'space-between',
    width: 150,
    height: 60,
    flexDirection: 'row',
  },
  itemfbgg: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icon2gg: {
    marginTop: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icon2fb: {
    marginTop: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  homeview3: {
    backgroundColor: 'white',
    position: 'relative',
    marginLeft: 16,
    marginTop: 10,
    // marginLeft: 28,
    // marginTop: 18,
    borderRadius: 10,
    height: 60,
    width: '90%',
    position: 'relative',
    flexDirection: 'row',
  },
  view3: {
    // marginTop: 24,
  },
  view3tittle3: {
    color: 'gray',
    marginLeft: 16,
  },
  view4: {
    padding: 16,
    // backgroundColor: 'red',
    // marginLeft: '5%',
    // marginLeft: 16,
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  view4title: {
    marginLeft: '3%',
    flexShrink: 1
  },
  button1: {
    width: '100%',
    height: 57,
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    borderRadius: 28.5,
  },
  buttonlogin1: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 20,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
})