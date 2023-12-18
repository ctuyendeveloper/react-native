import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Screen3 = () => {
    return (
            <View style={styles.body}>
                <View style={styles.body2}>
                    <Text style={styles.tittle1}>Explore</Text>
                    <Text style={styles.tittle2}>Search For A Pet</Text>
                    <View style={styles.homeview2}>
                        <Image style={styles.icon} source={require('../../../media_phainop/searchlab3.png')} />
                        <TextInput style={styles.tittle3} placeholder='Search'></TextInput>
                    </View>
                    <View style={styles.bottomfake}>
                        <View style={styles.bottomitem}>
                            <Text style={styles.bottomtitle}>Cats</Text>
                        </View>
                        <View style={[styles.bottomitem, styles.bottomtitle1]}>
                            <Text style={styles.bottomtitle}>Dogs</Text>
                        </View>
                        <View style={styles.bottomitem}>
                            <Text style={styles.bottomtitle}>Birds</Text>
                        </View>
                        <View style={styles.bottomitem}>
                            <Text style={styles.bottomtitle}>Others</Text>
                        </View>
                    </View>
                    <View style={styles.homeview3}>
                        <View style={styles.homeview3a}>
                            <Image style={styles.hinh} source={require('../../../media_phainop/dog1lab3.png')} />
                            <View style={styles.homeview3b}>
                                <Text style={styles.homeview3btitle1}>Coco</Text>
                                <Text style={styles.homeview3btitle2}>Coat</Text>
                                <Text style={styles.homeview3btitle3}>Medium</Text>
                                <Text style={styles.homeview3btitle4}>Age</Text>
                                <Text style={styles.homeview3btitle5}>3yrs</Text>
                            </View>
                            <View style={[styles.homeview3b, styles.homeview3b2]}>
                                <Text style={styles.homeview3btitle6}>Female</Text>
                                <Text style={styles.homeview3btitle2}>Origin</Text>
                                <Text style={styles.homeview3btitle3}>Canada</Text>
                                <Text style={styles.homeview3btitle4}>Weight</Text>
                                <Text style={styles.homeview3btitle5}>4 Pounds</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.homeview3}>
                        <View style={styles.homeview3a}>
                            <Image style={styles.hinh} source={require('../../../media_phainop/dog2lab3.png')} />
                            <View style={styles.homeview3b}>
                                <Text style={styles.homeview3btitle1}>Snow</Text>
                                <Text style={styles.homeview3btitle2}>Coat</Text>
                                <Text style={styles.homeview3btitle3}>Short</Text>
                                <Text style={styles.homeview3btitle4}>Age</Text>
                                <Text style={styles.homeview3btitle5}>6yrs</Text>
                            </View>
                            <View style={[styles.homeview3b, styles.homeview3b2]}>
                                <Text style={styles.homeview3btitle6}>Male</Text>
                                <Text style={styles.homeview3btitle2}>Origin</Text>
                                <Text style={styles.homeview3btitle3}>Greece</Text>
                                <Text style={styles.homeview3btitle4}>Weight</Text>
                                <Text style={styles.homeview3btitle5}>7 Pounds</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomitema}>
                        <Image style={styles.iconbottom} source={require('../../../media_phainop/homelab3.png')} />
                        <Text style={styles.bottomtitlea}>Home</Text>
                    </View>
                    <View style={styles.bottomitema}>
                        <Image style={styles.iconbottom} source={require('../../../media_phainop/chatlab3.png')} />
                        <Text style={styles.bottomtitlea}>Chat</Text>
                    </View>
                    <View style={styles.bottomitema}>
                        <Image style={styles.iconbottom} source={require('../../../media_phainop/chuonglab3.png')} />
                        <Text style={styles.bottomtitlea}>Notification</Text>
                    </View>
                    <View style={styles.bottomitema}>
                        <Image style={styles.iconbottom} source={require('../../../media_phainop/profilelab3.png')} />
                        <Text style={styles.bottomtitlea}>Profile</Text>
                    </View>
                </View>
            </View>
    )
}

export default Screen3

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(223, 0, 84, 1)',
    },
    body2: {
        padding: 16,
    },
    bottom: {
        marginTop: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.71)',
        width: '100%',
        height: 72,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tittle1: {
        // marginLeft: 20,
        // marginTop: '5%',
        fontWeight: 800,
        fontStyle: 'normal',
        fontSize: 25,
        lineHeight: 30,
        color: '#FFFFFF',
    },
    tittle2: {
        // marginLeft: 20,
        // marginTop: 17,
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 22,
        lineHeight: 27,
        color: '#FFFFFF',
    },
    homeview2: {
        backgroundColor: 'white',
        // marginLeft: 33,
        marginTop: 19,
        borderRadius: 25,
        height: 52,
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
    },
    homeview3: {
        marginTop: 16,
        // marginLeft: 25,
        flexDirection: 'row',
    },
    homeview3a: {
        backgroundColor: 'rgba(255, 210, 187, 0.66)',
        borderRadius: 25,
        // height: 171,
        width: '100%',
        flexDirection: 'row',
    },
    homeview3b: {
        marginLeft: 11,
        flexDirection: 'column',
    },
    homeview3b2: {
        marginLeft: 37,
        flexDirection: 'column',
    },
    icon: {
        left: 21,
        top: 19,
        bottom: 9,
        position: 'absolute',
        width: 24,
        height: 24,
    },
    tittle3: {
        top: 4,
        left: 160,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
        position: 'absolute',
    },
    bottomfake: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bottomitem: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
    },
    bottomitema: {
        alignItems: 'center',
    },
    bottomtitle1: {
        backgroundColor: '#FFB228',
    },
    bottomtitle: {
        marginTop: 22,
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
    },
    hinh: {
        marginLeft: 22,
        // marginTop: 6,
        borderRadius: 25,
    },
    homeview3btitle1: {
        marginTop: 22,
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
    },
    homeview3btitle2: {
        marginTop: 17,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#FFFFFF',
    },
    homeview3btitle3: {
        marginTop: 2,
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#DF0054',
    },
    homeview3btitle4: {
        marginTop: 15,
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 17,
        color: '#FFFFFF',
    },
    homeview3btitle5: {
        marginTop: 3,
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 15,
        color: '#DF0054',
    },
    homeview3btitle6: {
        marginTop: 22,
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: '#DF0054',
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
    }
})