import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Screen1 = () => {
  return (
    <View style={styles.body}>
      <View>
        <Image style={styles.hinh} source={require('../../../media_phainop/backlab4.png')} />
        <Image style={styles.hinh2} source={require('../../../media_phainop/backlab41.png')} />
        <Text style={styles.tittle}>Cart</Text>
      </View>
      <View style={styles.homeview1}>
        <View style={styles.homeview3a}>
          <Image style={styles.home3ahinh} source={require('../../../media_phainop/foodlab4.png')} />
          <View style={styles.homeview3b}>
            <View style={styles.homeview3c}>
              <Text style={styles.homeview3ctitle1}>Red n hot pizza</Text>
              <Image style={styles.home3ahinh4} source={require('../../../media_phainop/daux.png')} />
            </View>
            <Text style={styles.homeview3ctitle3}>Spicy Chicken, beef</Text>
            <View style={styles.homeview3d}>
              <Text style={styles.homeview3ctitle4}>$15.30</Text>
              <View style={styles.homeview3e}>
                <Image style={styles.home3ahinh2} source={require('../../../media_phainop/dautrulab4.png')} />
                <Text style={styles.homeview3ctitle6}>02</Text>
                <Image style={styles.home3ahinh3} source={require('../../../media_phainop/dauconglab4.png')} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.homeview3a, styles.homeview3a1]}>
          <Image style={styles.home3ahinh} source={require('../../../media_phainop/foodlab4.png')} />
          <View style={styles.homeview3b}>
            <View style={styles.homeview3c}>
              <Text style={styles.homeview3ctitle1}>Greek salad</Text>
              <Image style={[styles.home3ahinh44, styles.home3ahinh44]} source={require('../../../media_phainop/daux.png')} />
            </View>
            <Text style={styles.homeview3ctitle3}>with baked salmon</Text>
            <View style={styles.homeview3d}>
              <Text style={styles.homeview3ctitle4}>$12.00</Text>
              <View style={styles.homeview3e}>
                <Image style={styles.home3ahinh2} source={require('../../../media_phainop/dautrulab4.png')} />
                <Text style={styles.homeview3ctitle6}>02</Text>
                <Image style={styles.home3ahinh3} source={require('../../../media_phainop/dauconglab4.png')} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.homeview22}>
          <Text style={styles.homeview22title}>Promo Code</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonlogin}>Apply</Text>
          </Pressable>
        </View>
        <View style={styles.homeview33}>
          <View style={styles.homeview33a}>
            <Text style={styles.homeview33atitle1}>Subtotal</Text>
            <Text style={styles.homeview33atitle2}>$27.30</Text>
            <Text style={styles.homeview33atitle3}>USD</Text>
          </View>
          <Image style={styles.home33hinh} source={require('../../../media_phainop/linelab4.png')} />
        </View>
        <View style={styles.homeview33}>
          <View style={styles.homeview33a}>
            <Text style={styles.homeview33atitle1}>Tax and Fees</Text>
            <Text style={styles.homeview33atitle22}>$5.30</Text>
            <Text style={styles.homeview33atitle3}>USD</Text>
          </View>
          <Image style={styles.home33hinh} source={require('../../../media_phainop/linelab4.png')} />
        </View>
        <View style={styles.homeview33}>
          <View style={styles.homeview33a}>
            <Text style={styles.homeview33atitle1}>Delivery</Text>
            <Text style={styles.homeview33atitle2}>$1.00</Text>
            <Text style={styles.homeview33atitle3}>USD</Text>
          </View>
          <Image style={styles.home33hinh} source={require('../../../media_phainop/linelab4.png')} />
        </View>
        <View style={styles.homeview33}>
          <View style={styles.homeview33a}>
            <Text style={styles.homeview33atitle1}>Total</Text>
            <Text style={styles.homeview33atitle12}>(2 items)</Text>
            <Text style={styles.homeview33atitle23}>$33.60</Text>
            <Text style={styles.homeview33atitle3}>USD</Text>
          </View>
          <Image style={styles.home33hinh} source={require('../../../media_phainop/linelab4.png')} />
        </View>
        <Pressable style={styles.button1}>
            <Text style={styles.buttonlogin1}>CHECKOUT</Text>
          </Pressable>
      </View>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 16,
  },
  homeview1: {
    height: '100%',
    marginTop: 30,
  },
  homeview3a: {
    // backgroundColor: 'red',
    height: 83,
    width: '100%',
    flexDirection: 'row',
  },
  homeview3a1: {
    marginTop: 25,
  },
  homeview3b: {
    marginLeft: 21,
    flexDirection: 'column',
  },
  homeview3c: {
    flexDirection: 'row',
  },
  homeview3d: {
    marginTop: 13,
    flexDirection: 'row',
  },
  hinh2: {
    position: 'absolute',
    top: 23,
    left: 28,
  },
  tittle: {
    position: 'absolute',
    top: 14,
    left: 200,
    marginTop: 8,
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 18,
    color: '#111719',
  },
  home3ahinh: {
    borderRadius: 20,
  },
  homeview3ctitle1: {
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 18,
    color: '#000000',
  },
  home3ahinh4: {
    width: 16,
    height: 16,
    marginLeft: 195,
  },
  home3ahinh44: {
    marginLeft: 220,
  },
  homeview3ctitle3: {
    marginTop: 8,
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 14,
    color: '#8C8A9D',
  },
  homeview3ctitle4: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 18,
    color: '#FE724C',
    marginRight: 140,
  },
  home3ahinh2: {
    left: 32,
    bottom: -56,
    position: 'absolute',
  },
  homeview3ctitle6: {
    position: 'absolute',
    left: 100,
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#000000',
  },
  home3ahinh3: {
    bottom: -28,
    position: 'absolute',
    left: 110,
  },
  homeview22: {
    flexDirection: 'row',
    marginTop: 32,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.1,
    width: 448,
    borderRadius: 100,
  },
  homeview22title: {
    marginTop: 25,
    marginLeft: '5%',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 14,
    color: '#BEBEBE',
  },
  button: {
    marginTop: 8,
    marginLeft: '54%',
    width: 96,
    height: 44,
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    borderRadius: 28.5,
  },
  buttonlogin: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  button1: {
    marginTop: 100,
    marginLeft: '23%',
    width: 248,
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
  homeview33: {
    width: 448,
    marginTop: 29,
  },
  homeview33a: {
    flexDirection: 'row',
  },
  homeview33atitle1: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16,
    fontStyle: 'normal',
    color: '#000000',
  },
  homeview33atitle12: {
    marginLeft: 2,
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 14,
    fontStyle: 'normal',
    color: '#BEBEBE',
  },
  homeview33atitle2: {
    marginLeft: '67%',
    fontWeight: 500,
    fontSize: 19,
    lineHeight: 19,
    fontStyle: 'normal',
    color: '#000000',
  },
  homeview33atitle22: {
    marginLeft: '59%',
    fontWeight: 500,
    fontSize: 19,
    lineHeight: 19,
    fontStyle: 'normal',
    color: '#000000',
  },
  homeview33atitle23: {
    marginLeft: '59%',
    fontWeight: 500,
    fontSize: 19,
    lineHeight: 19,
    fontStyle: 'normal',
    color: '#000000',
  },
  homeview33atitle3: {
    marginLeft: '1%',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'normal',
    color: '#9796A1',
  },
  home33hinh: {
    width: 448,
    marginTop: 13,
  },
})
