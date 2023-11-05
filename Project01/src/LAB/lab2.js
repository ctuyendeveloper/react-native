import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const lab2 = () => {
  const [getname, setname] = useState(0)
  const [nhap, setnhap] = useState(-1) // số mặc định
  const [trungso, settrungso] = useState('Chưa nhập số mà')

  const changle = () => {
    const ramdom = Math.floor(Math.random() * 2);
      // Ví dụ tạo số nguyên >= 0 và < 100

    setname(ramdom)
    if (nhap == ramdom) {
      return settrungso('Trúng rùi nè!')
    }
    else {
      return settrungso('Không trúng rùi!')
    }
    // Ví dụ tạo số nguyên >= 5 và <= 20
    // console.log(`Random number : ${getRandomIntInclusive(5, 20)}`);
    // console.log(getname)

    // console.log(`Random number : ${Math.floor(Math.random() * 100)}`);
  }
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 20, textAlign: 'center', color: 'yellow' }}>App sổ xố</Text>
      <View style={style.container2}>
      <TextInput style={style.inputEmail} placeholder={'Nhập một số bất kỳ 0-99'} onChangeText={a => setnhap(a)} />
        <Text style={style.title}>Số ngẫu nhiên: {getname} == {trungso}</Text>
        {/* <Text style={style.title}> {trungso} </Text> */}
        <Button title="Quay số nào" onPress={changle} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  // button: {
  //   borderRadius: 20,
  //   marginTop: 16,
  //   width: 50,
  //   height: 50,
  //   backgroundColor: 'orange'
  // },
  inputEmail: {
    borderWidth: 1,
    borderColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#f5f4f2',
  },

  title: {
    backgroundColor: 'green',
    color: '#000',
    fontSize: 20,
    marginBottom: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: 'center',
  },

  container: {
    padding: 32,
    width: '100%',
    height: '100%',
    backgroundColor: 'gray'
  },
  container2: {
    marginTop: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});

export default lab2