import {
  StyleSheet, Text, View, Pressable,
  Image, FlatList
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { getItemNewsuser } from './NewsService';
import { UserContext } from '../User/UserContext';


const Profile = (props) => {
  const { user } = useContext(UserContext);
  const { navigation } = props;
  const [news, setNews] = useState([]);
  const [loading, setloading] = useState(false);


  const onGatenew = async () => {
    setloading(true);
    const news = await getItemNewsuser();
    setNews(news);
    setloading(false);
  }


  useEffect(() => {
    onGatenew();
  }, []);

  const renderItem = ({ item }) => {
    return (
        < View style={styles.homeview3f} >
          <Image style={styles.iconhinhhview3f} source={{ uri: item.image }} />
          <View style={styles.homeview3f1}>
            <Text style={styles.homeview3f1title2}>{item.title}</Text>
            <View style={styles.homeview3c}>
              <Image style={styles.iconbbchomeview3c} source={{ uri: item.image }} />
              <Text style={styles.homeview3ctitle1}>{item.createdBy}</Text>
              <Image style={styles.icondhhomeview3c} source={require('../media_phainop/dongho.png')} />
              <Text style={styles.homeview3ctitle2}>{item.createdAt}</Text>
            </View>
          </View>
        </View >
    )
  }
  return (

    <View >
      <View style={styles.body}>
        <Text style={styles.txprofile}>Profile</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('../media_phainop/Vector1.png')} />
      </View>
      <View style={styles.itemne}>
        <View>
          <Image source={require('../media_phainop/avatar.png')} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.follow}>2156</Text>
          <Text>Follower</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.follow}>567</Text>
          <Text>Follower</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.follow}> 23</Text>
          <Text>New</Text>
        </View>
      </View>
      <View>
        <Text style={styles.id} >{user.name}</Text>
      </View>
      <View style={styles.titleid}>
        <Text style={{ fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
      <View style={styles.view1}>
        <Pressable onPress={() => navigation.navigate('Edit')}>
          <Text style={styles.Button1}>Edit Profile</Text>
        </Pressable>

        <Text style={styles.Button1}>Website</Text>
      </View>


      <View>
        <Pressable onPress={() => navigation.navigate('Add')}>
          <Image style={styles.add} source={require("../media_phainop/Add.png")} />
        </Pressable>

      </View>

      <FlatList
      style={{marginTop: 200, height: 200, width: '100%',}}
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onRefresh={onGatenew}
        refreshing={loading}

      />

    </View>

  )
}

export default Profile

const styles = StyleSheet.create({

  add: {
    position: 'absolute',
    top: 450,
    left: 300,
  },
  textDoc: {
    height: 48,
    width: 250,
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000'
  },
  containerSum: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    width: 173,
    height: 20,
  },
  cham: {
    position: 'absolute',
    marginRight: 2,
    left: '100%',
    top: '95%',

  },
  containerbrand: {
    flexDirection: 'row',

    marginTop: 4,
    width: 74,
    height: 20,
  },
  ellipse: {
    marginRight: 2,
  },
  containertime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    width: 91,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    width: "100%",
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 13,
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0.12,
    color: '#4E4B66'

  },
  content: {
    margin: 4,
    top: -5,
    left: 5,
  },
  title3: {
    fontSize: 15,
    marginLeft: 10,
    alignItems: 'center',
    height: 30,
  },
  title2: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 20,
    top: 150,
    width: '100%',
    height: 50,

  },
  view1: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',

    top: 140,
  },
  Button1: {
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',

  },
  titleid: {
    left: 24,
    width: '70%',
    top: 100,

  },
  id: {
    fontSize: 30,
    color: 'black',
  },
  follow: {
    color: 'black',
    fontSize: 20,
  },
  itemne: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    top: 80,
  },
  txprofile: {
    color: 'black',
    fontSize: 20,
  },
  img: {
    position: 'absolute',
    left: 350,
    top: 68
  },
  body: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    top: 68
  },

  // item của tôi
     homeview3f: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 32,
    },
       iconhinhhview3f: {
        width: 96,
        height: 96,
        borderRadius: 6,
    },
        homeview3f1: {
        marginLeft: 4,
        height: 96,
        width: 264,
        justifyContent: 'space-between',
    },
       homeview3f1title2: {
        marginLeft: 6,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
       homeview3c: {
        marginLeft: 6,
        flexDirection: 'row',
    },
        iconbbchomeview3c: {
        width: 20,
        height: 20,
        marginRight: 4,
        borderRadius: 20,
    },
      homeview3ctitle1: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginRight: 12,
    },
       icondhhomeview3c: {
        marginTop: 3,
        width: 14,
        height: 14,
        marginRight: 4,
    },
      homeview3ctitle2: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginRight: 12,
    },
})