import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, Button } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'



const Screen1 = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.body}>
            {/* <Button title='BACK' onPress={() => navigation.navigate('full')}/> */}
            <View style={styles.homeview}>
                <View style={styles.homeview1}>
                    <Pressable onPress={() => navigation.navigate('full')} style={styles.homeview2a}>
                        <Image style={styles.iconsearchhomeview2a} source={require('../../../media_phainop/back.png')} />
                    </Pressable>
                    <View style={styles.homeview2}>
                        <Image style={styles.iconsearchhomeview2} source={require('../../../media_phainop/search.png')} />
                        <TextInput style={styles.textinputhomeview2} placeholder='Fried Rice'></TextInput>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollview}>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                    <View style={styles.scrollview1}>
                        <Text style={styles.scrollview1title}>Rescued</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.homeview3}>
                <Pressable style={styles.homeview3a} onPress={() => navigation.navigate('Forgot')}>
                    <View>
                        <Image style={styles.iconhomeview3a} source={require('../../../media_phainop/iconlab82.png')}></Image>
                        <View style={styles.homeview3b}>
                            <View>
                                <Text style={styles.homeview3atitle1}>Suhani Restaurant</Text>
                                <Text style={styles.homeview3atitle2}>Chinnese, North Indian</Text>
                                <Text style={styles.homeview3atitle3}>$100</Text>
                            </View>
                            <View>
                                <Image style={styles.iconhomeview3b} source={require('../../../media_phainop/iconlab83.png')}></Image>
                                <Image style={styles.iconhomeview3c} source={require('../../../media_phainop/iconlab84.png')}></Image>
                            </View>
                        </View>
                        <Text style={styles.homeview3atitle4}>Left over food and supplies are gathered and sold for 50% off!</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.homeview3a} onPress={() => navigation.navigate('Forgot')}>
                    <View>
                        <Image style={styles.iconhomeview3a} source={require('../../../media_phainop/iconlab82.png')}></Image>
                        <View style={styles.homeview3b}>
                            <View>
                                <Text style={styles.homeview3atitle1}>Pista House</Text>
                                <Text style={styles.homeview3atitle2}>Chinnese, Fast Food</Text>
                                <Text style={styles.homeview3atitle3}>$125</Text>
                            </View>
                            <View>
                                <Image style={styles.iconhomeview3b} source={require('../../../media_phainop/iconlab83.png')}></Image>
                                <Image style={styles.iconhomeview3c} source={require('../../../media_phainop/iconlab84.png')}></Image>
                            </View>
                        </View>
                        <Text style={styles.homeview3atitle4}>Left over food and supplies are gathered and sold for 50% off!</Text>
                    </View>
                </Pressable>
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

export default Screen1

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',

        backgroundColor: 'rgba(255, 75, 58, 1)',
    },
    homeview1: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview: {
        padding: 16,
        backgroundColor: 'rgba(255, 75, 58, 1)',
    },
    homeview2: {
        backgroundColor: 'white',
        position: 'relative',
        borderRadius: 13.3,
        width: '80%',
        height: 49,
        flexDirection: 'row',
    },
    iconsearchhomeview2: {
        marginTop: 17,
        marginLeft: '9%',
    },
    textinputhomeview2: {
        fontSize: 16,
        lineHeight: 21,
        color: '#4E4B66',
        marginLeft: '4%',
    },
    homeview2a: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 13.3,
        width: '12%',
        height: 49,
    },
    iconsearchhomeview2a: {
        marginTop: 16,
        marginLeft: 10,
    },
    scrollview: {
        marginTop: 23,
        height: 32,
    },
    scrollview1: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        width: 79,
        height: 32,
        marginRight: 8,
    },
    scrollview1title: {
        marginTop: 6,
        textAlign: 'center',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
    },
    bottom: {
        top: '73.5%',
        position: 'absolute',
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
        marginTop: 17,
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
    homeview3: {
        marginTop: 24,
        backgroundColor: 'white',
        borderRadius: 30,
        height: '100%',
        alignItems: "center"
    },
    homeview3a: {
        marginTop: 39,
        width: '84%',
        height: '30%',
        borderRadius: 3,
        borderWidth: 0.1,
    },
    iconhomeview3a: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        height: 110,
    },
    homeview3atitle1: {
        marginTop: 14,
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 17,
        lineHeight: 21,
        color: '#333333',
    },
    homeview3atitle2: {
        marginTop: 2,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 27,
        color: '#707070',
    },
    homeview3atitle3: {
        marginTop: 12,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 19,
        lineHeight: 20,
        color: '#F88922',
    },
    iconhomeview3b: {
        marginTop: 16,
    },
    iconhomeview3c: {
        marginTop: 19,
    },
    homeview3b: {
        marginLeft: 18,
        marginRight: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    homeview3atitle4: {
        marginLeft: 24,
        marginTop: 12,
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        color: '#A7A7A7',
    },
})