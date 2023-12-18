import { StyleSheet, Text, View, Pressable, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useCallback } from 'react'
import { UserContext } from '../User/UserContext';
import { launchCamera } from 'react-native-image-picker';
import AxiosInstance from '../helpers/AxiosHelper';


const Edit = (props) => {
  const { navigation } = props;
  const { user, setUser } = useContext(UserContext);
  // console.log(infouser);
  const capter = useCallback(async () => {
    const resurlt = await launchCamera();
    console.log(resurlt.assets[0].uri);

    // upload image
    const formData = new FormData();
    formData.append('image', {
      uri: resurlt.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    const response = await AxiosInstance('multipart/form-data').post('/media/upload', formData);
    console.log('>>> +' (response.data.path));

    setUser({ ...user, avatar: response.data.path });
  }, []);

  const updateProfile = async () => {
    const response = await AxiosInstance().post("/users/update-profile", {
      name: user.name, address: user.address,
      phone: user.phone, avatar: user.avatar, dob: user.dob
    });
    if (response.error == false) {
      ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.contaidau}>
        <Pressable onPress={() => navigation.goBack()}><Image source={require('../media_phainop/back.png')} ></Image></Pressable>
        <Text style={styles.txtCreat}>Edit Profile</Text>
        <Pressable onPress={updateProfile}><Image source={require('../media_phainop/tick.png')}></Image></Pressable>
      </View>
      <TouchableOpacity style={styles.contaiprofile} onPress={capter}>
        {
          user.avatar == ""
            ? <Image source={require('../media_phainop/Vector2.png')} style={styles.imgprofile}></Image>
            : <Image source={{ uri: user.avatar }} style={styles.imgprofile}></Image>
        }
       
      </TouchableOpacity>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Name</Text>
        <TextInput style={styles.input} value={user.name} onChangeText={(text => setUser({ ...user, name: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt} value={user.address}>Address</Text>
        <TextInput style={styles.input} value={user.address} onChangeText={(text => setUser({ ...user, address: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Phone</Text>
        <TextInput style={styles.input} value={user.phone} onChangeText={(text => setUser({ ...user, phone: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Email*</Text>
        <TextInput style={styles.input} value={user.email} onChangeText={(text => setUser({ ...user, email: text }))}></TextInput>
      </View>
      <View style={styles.contaiinput}>
        <Text style={styles.txt}>Dob</Text>
        <TextInput style={styles.input} value={user.dob} onChangeText={(text => setUser({ ...user, dob: text }))}></TextInput>
      </View>
    </View>
  )
}

export default Edit

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 24,
  },
  contaidau: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtCreat: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    color: '#000000',
  },
  contaiprofile: {
    alignItems: 'center',
    marginTop: 15,
  },
  imgprofile: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  presprofile: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#1877F2',
    marginLeft: 92,
  },
  input: {
    borderWidth: 0.8,
    borderRadius: 6,
    width: '100%',
    height: 45,
    marginTop: 4,
  },
  contaiinput: {
    marginTop: 16,
  },
  txt: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    color: '#4E4B66',
    letterSpacing: 0.12,
  }
})