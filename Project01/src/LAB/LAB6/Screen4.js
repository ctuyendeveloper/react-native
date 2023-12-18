import { StyleSheet, Text, View, TextInput, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'

const Screen4 = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.container}>
    <View style={styles.body}>
      {/* <Button title="Trở lại" onPress={() => navigation.goBack() /> */}
      <Pressable onPress={() => navigation.goBack()}>
      <Image style={styles.hinh2} source={require('../../../media_phainop/backlab41.png')} />
      </Pressable>
      <Text style={styles.view1title}>Forgot password?</Text>
      <View style={styles.homeview3}>
        <TextInput style={styles.view3tittle3} placeholder='Email'></TextInput>
      </View>
      <Text style={styles.title2}><Text style={{ color: 'red' }}>* </Text>We will send you a message to set or reset your new password</Text>
      <Text style={styles.title3}>Send code</Text>
      <View style={styles.homeview4}>
        <Pressable style={styles.button1}>
          <Text style={styles.buttonlogin1}>></Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  )
}

export default Screen4

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 16,
  },
  hinh2: {
    // marginTop: 32,
    // marginLeft: 28,
    width: 10,
    height: 20,
  },
  homeview3: {
    backgroundColor: 'white',
    position: 'relative',
    // marginLeft: 28,
    marginTop: 32,
    borderRadius: 10,
    height: 60,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
  },
  homeview4: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  view3tittle3: {
    color: 'gray',
    marginLeft: 48,
  },
  view1title: {
    marginLeft: 28,
    marginTop: 32,
    fontWeight: 500,
    fontSize: 34,
    lineHeight: 34,
    fontStyle: 'normal',
    color: '#FE724C',
  },
  title2: {
    width: '95%',
    marginTop: 32,
    marginLeft: 28,
  },
  title3: {
    marginTop: 70,
    marginLeft: 28,
    fontWeight: 700,
    fontSize: 34,
    lineHeight: 34,
    fontStyle: 'normal',
    color: 'rgb(200,200,200)',
  },
  button1: {
    width: 60,
    height: 57,
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 70, 
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