import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native'
import React from 'react'

// props: 1 object
// props: là giá trị mặc định của component
const Screen2 = (props) => {
  const { children, hoTen } = props
  return (
    <View style={style.container}>
      {/* <Text>Screen2</Text> */}
      {children}
      <Text style={style.title}>Ho ten: {hoTen}</Text>
      <Text>Screen2</Text>
      <TextInput style={style.inputEmail} />
      <Pressable style={style.button}>
        <Text style={style.buttonlogin}>Day la nut bam</Text>
      </Pressable>
      <Image style={{ width: '100%', height: 50 }} source={require('../../media_phainop/background.jpg')} />
      <Image style={{ width: '100%', height: '100%' }} source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftinhte.vn%2Fthread%2Fhuong-dan-toc-chien-cach-choi-yasuo-vi-tuong-quoc-dan-cua-game-thu-viet.3220035%2F&psig=AOvVaw2RgM1ckuCzX2Nxnvz2f8OI&ust=1684230238123000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDSsNqE9_4CFQAAAAAdAAAAABAK'}} />
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginTop: 16,
    width: 50,
    height: 50,
    backgroundColor: 'orange'
  },
  inputEmail: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: 50,
    backgroundColor: 'gray',
  },

  title: {
    backgroundColor: 'yellow',
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '20%',
    padding: 16,

  }
});

export default Screen2