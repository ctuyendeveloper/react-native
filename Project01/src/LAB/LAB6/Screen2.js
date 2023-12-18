import { StyleSheet, Text, View, TextInput, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'

const Screen2 = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.homeview2}>
          <TextInput style={styles.tittle3} placeholder='Username, Mobile Number'></TextInput>
        </View>
        <View style={styles.homeview3}>
          <TextInput style={styles.tittle3} placeholder='Password'></TextInput>
        </View>
        <Text style={styles.tittle4} onPress={() => navigation.navigate('Forgot')}>Forgot password?</Text>
        <Pressable style={styles.button1}>
          <Text style={styles.buttonlogin1}>Login</Text>
        </Pressable>
        <Text style={styles.tittle5}>Or</Text>
        <Pressable style={styles.buttonfb}>
          <Image style={styles.icon2fb} source={require('../../../media_phainop/fb.png')} />
          <Text style={styles.buttonloginfb}>Log In with Facebook</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Screen4')} style={styles.buttongg}>
          <Image style={styles.icon2gg} source={require('../../../media_phainop/gg.png')} />
          <Text style={styles.buttonlogingg}>Log In with Google</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Screen2

const styles = StyleSheet.create({
  body: {
    padding: 16,
    width: '100%',
    height: '100%',
  },
  homeview2: {
    
    backgroundColor: 'white',
    position: 'relative',
    // marginLeft: 28,
    marginTop: 16,
    borderRadius: 10,
    height: 60,
    // width: 400,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
  },
  homeview3: {
    backgroundColor: 'white',
    position: 'relative',
    // marginLeft: 28,
    marginTop: 16,
    borderRadius: 10,
    height: 60,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
  },
  tittle3: {
    marginLeft: 20,
  },
  tittle4: {
    textAlign: 'right',
    marginTop: 18,
    // marginLeft: 28,
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 15,
    fontStyle: 'normal',
    color: '#FE724C',
  },
  button1: {
    marginTop: 20,
    // marginLeft: 28,
    width: 400,
    width: '100%',
    height: 57,
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    borderRadius: 28.5,
  },
  buttonlogin1: {
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 15,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  tittle5: {
    marginTop: 20,
    // marginLeft: 18,
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 18,
    fontStyle: 'normal',
    color: '#000000',
    textAlign: 'center',
  },
  buttonfb: {
    flexDirection: 'row',
    marginTop: 20,
    // marginLeft: 28,
    // width: 400,
    width: '100%',
    height: 57,
    backgroundColor: '#03A5F0',
    justifyContent: 'center',
    borderRadius: 28.5,
  },
  buttonloginfb: {
    marginTop: 21,
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 18,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  buttongg: {
    flexDirection: 'row',
    marginTop: 21,
    marginLeft: 28,
    // width: 400,
    width: '100%',
    height: 57,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 28.5,
  },
  buttonlogingg: {
    marginTop: 21,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 18,
    fontStyle: 'normal',
    color: 'gray',
    textAlign: 'center'
  },
  icon2fb: {
    width: 26,
    height: 26,
    marginRight: 16,
    marginTop: 16.3,
  },
  icon2gg: {
    marginRight: 16,
    marginTop: 16.3,
  },
})