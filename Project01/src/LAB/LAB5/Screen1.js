import { StyleSheet, Text, View, Image, Pressable, FlatList, Button } from 'react-native'
import React, { useState } from 'react'




const Screen1 = ({ navigation }) => {
  const [giatri, getgiatri] = useState(1);
  const [giatri2, getgiatri2] = useState(1);
  const total = 23.99 * giatri2 + 20.99 * giatri;
  const roundedNumber = total.toFixed(2);
  const changegiatricong = () => {

    getgiatri(giatri + 1);
  }
  const changegiatritru = () => {
    if (giatri > 0) {
      getgiatri(giatri - 1);
    }
  }
  const changegiatricong2 = () => {
    getgiatri2(giatri2 + 1);
  }
  const changegiatritru2 = () => {
    if (giatri2 > 0) {
      getgiatri2(giatri2 - 1);
    }
  }


  // const data = [
  //   {
  //     id: "1", view: <View style={styles.viewitem}>
  //       <Image style={styles.home3ahinh} source={require('../../../media_phainop/hamberglab5.png')} />
  //       <View style={styles.homeview3b}>
  //         <View style={styles.homeview3c}>
  //           <Pressable onPress={changegiatritru2}>
  //             <Image style={styles.home3ahinh2} source={require('../../../media_phainop/dautrulab4.png')} />
  //           </Pressable>
  //           <Text style={styles.homeview3ctitle0}>{giatri2}</Text>
  //           <Pressable onPress={changegiatricong2}>
  //             <Image style={styles.home3ahinh3} source={require('../../../media_phainop/dauconglab4.png')} />
  //           </Pressable>
  //         </View>
  //         <Text style={styles.homeview3ctitle1}>The Macdonalds</Text>
  //         <Text style={styles.homeview3ctitle2}>Classic cheesburger</Text>
  //         <Text style={styles.homeview3ctitle3}>$23.99</Text>
  //       </View>
  //     </View>
  //   },
  //   {
  //     id: "2", view: <View style={styles.viewitem}>
  //       <Image style={styles.home3ahinh} source={require('../../../media_phainop/hamberglab5.png')} />
  //       <View style={styles.homeview3b}>
  //         <View style={styles.homeview3c}>
  //           <Pressable onPress={changegiatritru2}>
  //             <Image style={styles.home3ahinh2} source={require('../../../media_phainop/dautrulab4.png')} />
  //           </Pressable>
  //           <Text style={styles.homeview3ctitle0}>{giatri2}</Text>
  //           <Pressable onPress={changegiatricong2}>
  //             <Image style={styles.home3ahinh3} source={require('../../../media_phainop/dauconglab4.png')} />
  //           </Pressable>
  //         </View>
  //         <Text style={styles.homeview3ctitle1}>The Macdonalds</Text>
  //         <Text style={styles.homeview3ctitle2}>Classic cheesburger</Text>
  //         <Text style={styles.homeview3ctitle3}>$23.99</Text>
  //       </View>
  //     </View>
  //   },
  // ]
  // const render = (value) => {
  //   const { item } = value
  //   return (
  //     <React.Fragment key={item.id}>
  //     {item.view}
  //   </React.Fragment>
  //   )
  // }
  return (
    <View style={styles.body}>
      <View style={styles.top}>
        <Pressable onPress={() => navigation.navigate('full')}>
          <View style={styles.top1}>
            <Image style={styles.hinh} source={require('../../../media_phainop/backlab4.png')} />
            <Image style={styles.hinh2} source={require('../../../media_phainop/backlab41.png')} />
          </View>
        </Pressable>
        <View style={styles.top2}>
          <Text style={styles.tittle1}>Delivery to</Text>
          <Image style={styles.hinh4} source={require('../../../media_phainop/showlab5.png')} />
          <Text style={styles.tittle2}>lekki phase 1, Estate</Text>
        </View>
        <Image style={styles.hinh3} source={require('../../../media_phainop/avatarlab4.png')} />
      </View>
      <Text style={styles.tittlemain}>Your cart</Text>
      {/* <FlatList style={styles.tittlemain} data={data} renderItem={render} keyExtractor={(item) => item.id}/> */}
      <View style={styles.viewitem}>
        <Image style={styles.home3ahinh} source={require('../../../media_phainop/hamberglab5.png')} />
        <View style={styles.homeview3b}>
          <View style={styles.homeview3c}>
            <Pressable onPress={changegiatritru}>
              <Image style={styles.home3ahinh2} source={require('../../../media_phainop/dautrulab4.png')} />
            </Pressable>
            <Text style={styles.homeview3ctitle0}>{giatri}</Text>
            <Pressable onPress={changegiatricong}>
              <Image style={styles.home3ahinh3} source={require('../../../media_phainop/dauconglab4.png')} />
            </Pressable>
          </View>
          <Text style={styles.homeview3ctitle1}>The Macdonalds</Text>
          <Text style={styles.homeview3ctitle2}>Classic cheesburger</Text>
          <Text style={styles.homeview3ctitle3}>$20.99</Text>
        </View>
      </View>
      <View style={styles.viewitem}>
        <Image style={styles.home3ahinh} source={require('../../../media_phainop/hamberglab5.png')} />
        <View style={styles.homeview3b}>
          <View style={styles.homeview3c}>
            <Pressable onPress={changegiatritru2}>
              <Image style={styles.home3ahinh2} source={require('../../../media_phainop/dautrulab4.png')} />
            </Pressable>
            <Text style={styles.homeview3ctitle0}>{giatri2}</Text>
            <Pressable onPress={changegiatricong2}>
              <Image style={styles.home3ahinh3} source={require('../../../media_phainop/dauconglab4.png')} />
            </Pressable>
          </View>
          <Text style={styles.homeview3ctitle1}>The Macdonalds</Text>
          <Text style={styles.homeview3ctitle2}>Classic cheesburger</Text>
          <Text style={styles.homeview3ctitle3}>$23.99</Text>
        </View>
      </View>
      <View style={styles.viewduoi}>
        <Text style={styles.viewduoitittle1}>Total</Text>
        <Text style={styles.viewduoitittle2}>$ {roundedNumber}</Text>
      </View>
      <Pressable style={styles.button1}>
        <Text style={styles.buttonlogin1}>Process to payment</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  flatlist: {
    width: '100%',
    height: '100%',
  },
  body: {
    width: '100%',
    height: '100%',
  },
  hinh2: {
    position: 'absolute',
    top: '35%',
    left: '12%',
  },
  hinh: {
    left: '6%',
    top: '4%',
  },
  top1: {
    position: 'relative',
  },
  top2: {
    position: 'absolute',
    top: '25%',
    left: '12%',
    flexDirection: 'column',
    height: 45,
    width: 145,
    left: '33%',
  },
  tittle1: {
    textAlign: 'center',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 15,
    color: '#1C1C1C',
    marginBottom: 1,
  },
  tittle2: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 15,
    color: '#FE554A',
  },
  hinh3: {
    left: '84%',
    top: '4%',
    width: 38,
    width: 38,
    position: 'absolute',
  },
  hinh4: {
    left: '75%',
    top: '10%',
    position: 'absolute',
  },
  tittlemain: {
    marginLeft: '6%',
    marginTop: '5%',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 31,
    color: '#3D3D3D',
  },
  viewitem: {
    position: 'relative',
    borderRadius: 30,
    marginTop: '5%',
    marginLeft: '6%',
    width: '89%',
    height: '14%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  home3ahinh: {
    top: 22,
    left: 11,
    position: 'absolute',
    width: 78.32,
    height: 68,
    borderRadius: 20,
  },
  homeview3b: {
    position: 'absolute',
    top: 24,
    left: 100,
  },
  homeview3c: {
    width: 70,
    height: 24,
    top: 10,
    left: '72%',
    position: 'absolute',
    flexDirection: 'row',
  },
  homeview3ctitle1: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    color: '#3D3D3D',
  },
  homeview3ctitle2: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: '#3D3D3D',
  },
  homeview3ctitle3: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    color: '#FE554A',
  },
  home3ahinh2: {
    marginLeft: 60,
    width: 40,
    height: 80,
  },
  home3ahinh3: {
    width: 40,
  },
  homeview3ctitle0: {
    height: 24,
    marginTop: '13%',
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
    color: '#3D3D3D',
  },
  viewduoi: {
    width: '75%',
    height: '4%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: '12%',
    marginTop: '55%',
  },
  viewduoitittle1: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 15,
    color: '#3D3D3D',
  },
  viewduoitittle2: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 31,
    color: '#3D3D3D',
  },
  button1: {
    marginTop: '7%',
    marginLeft: '6%',
    width: '89%',
    height: 51,
    backgroundColor: 'rgba(255, 119, 76, 1)',
    justifyContent: 'center',
    borderRadius: 28.5,
  },
  buttonlogin1: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 15,
    fontStyle: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
})