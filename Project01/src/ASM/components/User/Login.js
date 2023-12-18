import { StyleSheet, Text, View, TextInput, Image, Pressable, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { UserContext } from './UserContext';
import CheckBox from '@react-native-community/checkbox';

const Login = (props) => {
  const { navigation } = props;
  const [isSelected, setSelection] = useState(false);
  const [isShownPassword, setisShownPassword] = useState(false);
  const [email, setemail] = useState('asd123@gmail.com');
  const [password, setpassword] = useState('123');
  const { onLogin1, setinfoUser } = useContext(UserContext);
  const [loading, setloading] = useState(false);

  const onLoginPress = async () => {
    setloading(true);
    const result = await onLogin1(email, password); 
    if (!result)
    {
      Alert.alert('Login Failed!');
    }
    setinfoUser(result.data.user);
    setloading(false);
  }


  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={[styles.hello, styles.again]}>Again!</Text>
        <Text style={styles.welcome}>Welcome back you've been missed</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.label}>Username*</Text>
        <TextInput value={email} onChangeText={setemail} style={styles.textinput} ></TextInput>
        <Text style={[styles.label, { marginTop: 16 }]}>Password*</Text>
        <View>
          <TextInput value={password} onChangeText={setpassword} style={[styles.textinput, { position: 'relative' }]} secureTextEntry={!isShownPassword}></TextInput>
          <Image style={styles.icon} source={require('../media_phainop/Icon.png')} />
        </View>
        <View style={styles.view3}>
          <View style={styles.view33}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.remember}>Remember Me</Text>
          </View>
          <Text style={styles.forgot}>Forgot the password</Text>
        </View>
        <Pressable onPress={() => onLoginPress()} style={styles.button}>
          <Text style={styles.buttonlogin}>
            {loading ? 'Loading...' : 'Login'}
          </Text>
        </Pressable>
        <Text style={styles.continue}>or continue with</Text>

        <View style={styles.view4}>
          <Pressable style={styles.button2}>
            <Image style={styles.icon2} source={require('../media_phainop/fb.png')} />
            <Text style={styles.buttonlogin2}>Facebook</Text>
          </Pressable>
          <Pressable style={styles.button2}>
            <Image style={styles.icon2} source={require('../media_phainop/gg.png')} />
            <Text style={styles.buttonlogin2}>Google</Text>
          </Pressable>
        </View>
        <View style={styles.view5}>
          <Text style={styles.donthave}>don't have an account ? <Text style={styles.signup} onPress={() => navigation.navigate('Register2')}>Sign up</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 24,
  },
  view1: {
    width: '100%',
    height: '27%',
    marginBottom: 16,
  },
  view3: {
    width: '100%',
    marginTop: 8,
    marginBottom: 16,
    justifyContent: 'space-between',
    flexDirection: 'row', // x-axis
  },
  view33: {
    justifyContent: 'space-between',
    flexDirection: 'row', // x-axis
  },
  view4: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row', // x-axis
  },
  view5: {
    flexDirection: 'row', // x-axis
  },
  hello: {
    // width: 167,
    // height: 144,
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 48,
    lineHeight: 72,
    color: '#050505',
    letterSpacing: 0.12,
  },
  again: {
    // width: 167,
    // height: 144,
    // fontWeight: 700,
    // fontStyle: 'normal',
    // fontSize: 48,
    // lineHeight: 72,
    // color: '#050505',
    // letterSpacing: 0.12,
    color: '#1877F2'
  },
  welcome: {
    width: '59%',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  label: {
    width: 80,
    height: 21,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  textinput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    gap: 10,
    width: '100%',
    height: 48,
    // backgroundColor: '#4E4B66',
    borderWidth: 1,
    color: '#4E4B66',
    borderRadius: 6,
  },
  icon: {
    top: 12,
    left: 345,
    width: 24,
    height: 24,
    position: 'absolute'
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  remember: {
    fontWeight: 400,
    fontStyle: 'normal',
    width: 107,
    height: 21,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginLeft: 4,
  },
  forgot: {
    fontWeight: 400,
    fontStyle: 'normal',
    height: 21,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#5890FF',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1877F2',
    fontStyle: 'normal',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonlogin: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  continue: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    height: 21,
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  button2: {
    flexDirection: 'row',
    width: '46%',
    height: 50,
    backgroundColor: '#EEF1F4',
    fontStyle: 'normal',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonlogin2: {
    marginTop: 12,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    fontStyle: 'normal',
    color: '#667080',
    textAlign: 'center'
  },
  donthave: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    height: 21,
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
  },
  signup: {
    color: '#03A5F0',
  },
  icon2: {
    marginTop: 12,
    marginRight: 10,
    width: 24,
    height: 24,
  },



})