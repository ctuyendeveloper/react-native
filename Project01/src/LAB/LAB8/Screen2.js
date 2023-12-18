import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const Screen2 = ({navigation}) => {
  const [giatri, getgiatri] = useState(1);
  const total = 100 * giatri;
  const changegiatricong = () => {

    getgiatri(giatri + 1);
  }
  const changegiatritru = () => {
    if (giatri > 0) {
      getgiatri(giatri - 1);
    }
  }
  return (
    <View style={styles.body}>
      <Image style={styles.icon1} source={require('../../../media_phainop/iconlab8a1.png')} />
      <Pressable onPress={() => navigation.navigate('full')} style={styles.homeview2ab}>
        <Image style={styles.iconsearchhomeview2ab} source={require('../../../media_phainop/back.png')} />
      </Pressable>
      <View style={styles.body2}>
        <View style={styles.homeview2}>
          <Text style={styles.homeview3atitle1}>Fried Rice</Text>
          <Text style={styles.homeview3atitle2}>Pista House, Kukatpally</Text>
        </View>
        <Image style={styles.homeview2a} source={require('../../../media_phainop/icontimlab8.png')} />
        <View style={styles.homeview4}>
          <View style={styles.homeview4a}>
            <Text style={styles.homeview4atitle1}>Description</Text>
            <Text style={styles.homeview4atitle2}>Our fried rice is made from the finest ingredients and veggies. single dish is made with fresh vegetables, rescued.</Text>
            <View style={styles.homeview4a1}>
              <Text>Rescued</Text>
              <Text>Vegan</Text>
              <Text>30 min</Text>
            </View>
          </View>
          <View style={styles.homeview4b}>
            <Text style={styles.homeview4btitle}>Nutritional Value</Text>
            <Image style={styles.line1} source={require('../../../media_phainop/linelab8.png')} />
            <View style={styles.homeview4b1}>
              <View>
                <Text style={styles.homeview4b1title}>Protein</Text>
                <Text style={styles.homeview4b1title}>Carbohydrates</Text>
                <Text style={styles.homeview4b1title}>Sodium</Text>
                <Text style={styles.homeview4b1title}>Potassium</Text>
                <Text style={styles.homeview4b1title}>Rich in Vitamin A, C and B3</Text>
              </View>
              <View>
                <Text style={styles.homeview4b1title2}>2.5g</Text>
                <Text style={styles.homeview4b1title2}>14.7g</Text>
                <Text style={styles.homeview4b1title2}>19%*</Text>
                <Text style={styles.homeview4b1title2}>5%*</Text>
              </View>
            </View>
            <Image style={styles.line1} source={require('../../../media_phainop/linelab8.png')} />
            <View style={styles.homeview4b2}>
              <Image source={require('../../../media_phainop/iconlab84.png')} />
              <Text style={styles.homeview4b2title}>*Daily value</Text>
            </View>
          </View>
        </View>
        <View style={styles.homeview5}>
          <Text style={styles.homeview5title}>Ingredients</Text>
          <View style={styles.homeview5b}>
            <Image style={styles.rice1} source={require('../../../media_phainop/rice1.png')} />
            <Image style={styles.rice1} source={require('../../../media_phainop/rice2.png')} />
            <Image style={styles.rice1} source={require('../../../media_phainop/rice3.png')} />
            <Image style={styles.rice1} source={require('../../../media_phainop/rice4.png')} />
          </View>
        </View>
        <View style={styles.homeview6}>
          <View style={styles.homeview6b}>
            <Text style={styles.homeview6title1}>Select User  -</Text>
            <Text style={styles.homeview6title2}>User 1</Text>
            <Image style={styles.rice1} source={require('../../../media_phainop/downlab8.png')} />
          </View>
          <Text style={styles.homeview6title3}>Edit</Text>
        </View>
        <Text style={styles.title4}>Additions</Text>
        <View style={styles.homeview7}>
          <Text style={styles.homeview7title}>Paneer</Text>
          <Image style={styles.rice1} source={require('../../../media_phainop/downlab8.png')} />
        </View>
        <View style={styles.homeview8}>
          <Text style={styles.homeview8title}>₹{total}</Text>
          <View style={styles.homeview8a}>
            <Text style={styles.homeview8atitle} onPress={changegiatritru}>-</Text>
            <Text style={styles.homeview8atitle}>{giatri}</Text>
            <Text style={styles.homeview8atitle} onPress={changegiatricong}>+</Text>
          </View>
          <Image style={styles.rice1} source={require('../../../media_phainop/cartlab8.png')} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomitema}>
            <Image style={styles.iconbottom} source={require('../../../media_phainop/homelab3.png')} />
          </View>
          <View style={styles.bottomitema}>
            <Image style={styles.iconbottom} source={require('../../../media_phainop/chatlab3.png')} />
          </View>
          <View style={styles.bottomitema}>
            <Image style={styles.iconbottom} source={require('../../../media_phainop/chuonglab3.png')} />
          </View>
          <View style={styles.bottomitema}>
            <Image style={styles.iconbottom} source={require('../../../media_phainop/profilelab3.png')} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({

  body: {
    width: '100%',
    height: '100%',
  },

  body2: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 150,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icon1: {
    width: '100%',
  },
  homeview2ab: {
    left: '5%',
    top: '5%',
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 13.3,
    width: '12%',
    height: 49,
},
iconsearchhomeview2ab: {
  marginTop: 16,
  marginLeft: 10,
},
  homeview2: {
    borderWidth: 0.1,
    top: -22,
    position: 'absolute',
    borderRadius: 30,
    width: '41%',
    height: 51,
    backgroundColor: '#FFFFFF',
    marginLeft: 30,
  },
  homeview2a: {
    left: 350,
    top: -20,
    position: 'absolute',
  },
  bottom: {
    marginTop: '4%',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomitema: {
    alignItems: 'center',
  },
  iconbottom: {
    marginTop: 12,
    width: 24,
    height: 24,
  },
  bottomtitlea: {
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#DF0054',
  },
  homeview3atitle1: {
    marginLeft: 21,
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 27,
    color: '#4A4A4A',
  },
  homeview3atitle2: {
    marginLeft: 21,
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#4A4A4A',
  },
  homeview3atitle2a: {
    width: '43%',
  },
  homeview4: {
    marginTop: 50,
    flexDirection: 'row',
  },
  homeview4a: {
    width: '46%',
  },
  homeview4atitle1: {
    marginLeft: 31,
    fontWeight: 900,
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 27,
    color: '#5E5959',
  },
  homeview4atitle2: {
    marginLeft: 31,
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: '#5E5959',
  },
  homeview4a1: {
    marginLeft: 20,
    flexDirection: 'row',
    height: 25,
    borderRadius: 20,
    borderWidth: 0.3,
    marginTop: 15,
    justifyContent: 'space-evenly',
  },
  homeview4b: {
    marginLeft: '7%',
    width: '38%',
  },
  line1: {
    marginTop: 5,
    width: '100%',
  },
  homeview4b1: {
    marginTop: 5,
    flexDirection: 'row',
  },
  homeview4b2: {
    marginTop: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  homeview4btitle: {
    textAlign: 'center',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#5E5959',
  },
  homeview4b1title: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#0F0C0C',
  },
  homeview4b1title2: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 14,
    color: '#0F0C0C',
  },
  homeview4b2title: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 14,
    color: '#0F0C0C',
  },
  homeview5: {
    marginLeft: '6%',
    marginTop: '3%',
    width: '85%',
    height: 78,
    borderRadius: 20,
    borderWidth: 0.1,
  },
  homeview5title: {
    marginTop: 6,
    marginLeft: 22,
    fontStyle: 'italic',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 21,
    color: '#797979',
  },
  homeview5b: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rice1: {
    marginLeft: 22,
    marginRight: 18,
    borderRadius: 14,
  },
  homeview6: {
    marginTop: '10%',
    alignItems: 'center',
    marginRight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeview6b: {
    alignItems: 'center',
    marginLeft: '6%',
    borderRadius: 20,
    borderWidth: 0.1,
    backgroundColor: '#F1F1F1',
    width: '71%',
    height: 34,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  homeview6title1: {
    fontStyle: 'italic',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 26,
    color: '#5E5959',
  },
  homeview6title2: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 26,
    color: '#5E5959',
  },
  homeview6title3: {
    fontStyle: 'italic',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 20,
    color: '#757575',
  },
  title4: {
    marginLeft: '7%',
    marginTop: '3%',
    fontStyle: 'italic',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 18,
    color: '#5E5959',
  },
  homeview7: {
    marginLeft: '7%',
    borderRadius: 20,
    borderColor: 'rgba(255, 120, 91, 1)',
    borderWidth: 1,
    marginTop: '2%',
    width: '87%',
    height: 29,
    alignItems: 'center',
    marginRight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeview7title: {
    marginLeft: '4%',
    fontStyle: 'italic',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: '#5E5959',
  },
  homeview8: {
    backgroundColor: 'rgba(255, 120, 91, 1)',
    marginLeft: '5%',
    borderRadius: 28,
    marginTop: '4%',
    width: '91%',
    height: 58,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeview8a: {
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    width: '34%',
    height: 34,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  homeview8title: {
    marginLeft: '7%',
    fontStyle: 'italic',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 21,
    lineHeight: 21,
    color: '#FEFAF9',
  },
  homeview8atitle: {
    marginLeft: '7%',
    fontStyle: 'italic',
    fontWeight: 900,
    fontStyle: 'normal',
    fontSize: 21,
    lineHeight: 29,
    color: '#FEFBFA',
  },
})