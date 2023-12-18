import { Image, ScrollView, StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'

const suongsuong = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <View style={styles.topview}>
                <Pressable onPress={() => navigation.navigate('full')}>
                    <View style={styles.buttonback}>
                        <Image style={styles.iconsearchhomeview2} source={require('../../media_phainop/back.png')} />
                    </View>
                </Pressable>
                <Text>Burgers</Text>
                <Text>Filter</Text>
            </View>
            <View style={styles.topview2}>
                <Text>We have founds 80 results of Burger’s</Text>
                <Text>Search Again</Text>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.homeview}>
                    <View style={styles.homeview1}>
                        <View style={styles.homeview1b}>
                            <Image style={styles.homeview1icon} source={require('../../media_phainop/logotest.png')} />
                            <View style={styles.homeview1c}>
                                <Image source={require('../../media_phainop/fast.png')} />
                                <Text style={styles.homeview1ctitle}>25min</Text>
                            </View>
                            <View style={styles.homeview1d}>
                                <Image source={require('../../media_phainop/delivery.png')} />
                                <Text style={styles.homeview1ctitle}>Chinese</Text>
                            </View>
                            <View style={styles.homeview1f}>
                                <Text style={styles.homeview1ctitle}>4.5</Text>
                            </View>
                        </View>
                        <Text style={styles.homeview1title}>McDonald's</Text>
                        <View style={styles.homeview1a}>
                            <Text style={styles.homeview1atitle}>Chinese</Text>
                            <Image source={require('../../media_phainop/daucham.png')} />
                            <Text style={styles.homeview1atitle}>American</Text>
                        </View>
                    </View>
                    <View style={styles.homeview2}>
                        <View style={styles.homeview1b}>
                            <Image style={styles.homeview2icon} source={require('../../media_phainop/logotest.png')} />
                            <View style={styles.homeview1c}>
                                <Image source={require('../../media_phainop/fast.png')} />
                                <Text style={styles.homeview1ctitle}>25min</Text>
                            </View>
                            <View style={styles.homeview1d}>
                                <Image source={require('../../media_phainop/delivery.png')} />
                                <Text style={styles.homeview1ctitle}>Chinese</Text>
                            </View>
                            <View style={styles.homeview1f}>
                                <Text style={styles.homeview1ctitle}>4.5</Text>
                            </View>
                        </View>
                        <Text style={styles.homeview1title}>McDonald's</Text>
                        <View style={styles.homeview1a}>
                            <Text style={styles.homeview1atitle}>Chinese</Text>
                            <Image source={require('../../media_phainop/daucham.png')} />
                            <Text style={styles.homeview1atitle}>American</Text>
                        </View>
                    </View>
                    <View style={styles.homeview3}>
                        <View style={styles.homeview1b}>
                            <Image style={styles.homeview1icon} source={require('../../media_phainop/logotest.png')} />
                            <View style={styles.homeview1c}>
                                <Image source={require('../../media_phainop/fast.png')} />
                                <Text style={styles.homeview1ctitle}>25min</Text>
                            </View>
                            <View style={styles.homeview1d}>
                                <Image source={require('../../media_phainop/delivery.png')} />
                                <Text style={styles.homeview1ctitle}>Chinese</Text>
                            </View>
                            <View style={styles.homeview1f}>
                                <Text style={styles.homeview1ctitle}>4.5</Text>
                            </View>
                        </View>
                        <Text style={styles.homeview1title}>McDonald's</Text>
                        <View style={styles.homeview1a}>
                            <Text style={styles.homeview1atitle}>Chinese</Text>
                            <Image source={require('../../media_phainop/daucham.png')} />
                            <Text style={styles.homeview1atitle}>American</Text>
                        </View>
                    </View>
                    <View style={styles.homeview4}>
                        <View style={styles.homeview1b}>
                            <Image style={styles.homeview2icon} source={require('../../media_phainop/logotest.png')} />
                            <View style={styles.homeview1c}>
                                <Image source={require('../../media_phainop/fast.png')} />
                                <Text style={styles.homeview1ctitle}>25min</Text>
                            </View>
                            <View style={styles.homeview1d}>
                                <Image source={require('../../media_phainop/delivery.png')} />
                                <Text style={styles.homeview1ctitle}>Chinese</Text>
                            </View>
                            <View style={styles.homeview1f}>
                                <Text style={styles.homeview1ctitle}>4.5</Text>
                            </View>
                        </View>
                        <Text style={styles.homeview1title}>McDonald's</Text>
                        <View style={styles.homeview1a}>
                            <Text style={styles.homeview1atitle}>Chinese</Text>
                            <Image source={require('../../media_phainop/daucham.png')} />
                            <Text style={styles.homeview1atitle}>American</Text>
                        </View>
                    </View>
                    <View style={styles.homeview5}>
                        <View style={styles.homeview1b}>
                            <Image style={styles.homeview1icon} source={require('../../media_phainop/logotest.png')} />
                            <View style={styles.homeview1c}>
                                <Image source={require('../../media_phainop/fast.png')} />
                                <Text style={styles.homeview1ctitle}>25min</Text>
                            </View>
                            <View style={styles.homeview1d}>
                                <Image source={require('../../media_phainop/delivery.png')} />
                                <Text style={styles.homeview1ctitle}>Chinese</Text>
                            </View>
                            <View style={styles.homeview1f}>
                                <Text style={styles.homeview1ctitle}>4.5</Text>
                            </View>
                        </View>
                        <Text style={styles.homeview1title}>McDonald's</Text>
                        <View style={styles.homeview1a}>
                            <Text style={styles.homeview1atitle}>Chinese</Text>
                            <Image source={require('../../media_phainop/daucham.png')} />
                            <Text style={styles.homeview1atitle}>American</Text>
                        </View>
                    </View>
                    <View style={styles.homeview6}>
                        <View style={styles.homeview1b}>
                            <Image style={styles.homeview2icon} source={require('../../media_phainop/logotest.png')} />
                            <View style={styles.homeview1c}>
                                <Image source={require('../../media_phainop/fast.png')} />
                                <Text style={styles.homeview1ctitle}>25min</Text>
                            </View>
                            <View style={styles.homeview1d}>
                                <Image source={require('../../media_phainop/delivery.png')} />
                                <Text style={styles.homeview1ctitle}>Chinese</Text>
                            </View>
                            <View style={styles.homeview1f}>
                                <Text style={styles.homeview1ctitle}>4.5</Text>
                            </View>
                        </View>
                        <Text style={styles.homeview1title}>McDonald's</Text>
                        <View style={styles.homeview1a}>
                            <Text style={styles.homeview1atitle}>Chinese</Text>
                            <Image source={require('../../media_phainop/daucham.png')} />
                            <Text style={styles.homeview1atitle}>American</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <Button title='back' style={styles.bottomitem} onPress={() => navigation.navigate('full')}> */}
            {/* <Image style={styles.iconbottom} source={require('../media_phainop/back.png')} /> */}
            {/* <Text style={styles.bottomtitle}>Profile</Text> */}
            {/* </Button> */}
        </View>
    )
}

export default suongsuong

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        padding: 24,
    },
    topview: {
        marginTop: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topview2: {
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeview: {
        marginTop: '2%',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview1: {

        width: '43%',
        height: '29%',
    },
    homeview2: {

        width: '43%',
        height: '35%',
    },
    homeview3: {

        width: '43%',
        height: '29%',
    },
    homeview4: {
        marginTop: '15%',
        width: '43%',
        height: '35%',
    },
    homeview5: {
        width: '43%',
        height: '29%',
    },
    homeview6: {
        marginTop: '15%',
        width: '43%',
        height: '35%',
    },
    homeview1icon: {
        borderRadius: 10,
        width: '100%',
    },
    homeview2icon: {
        height: '100%',
        borderRadius: 10,
        width: '100%',
    },
    homeview1a: {
        alignItems: 'center',
        width: '89%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview1title: {
        marginTop: '5%',
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 20,
        lineHeight: 27,
        color: '#010F07',
    },
    homeview1titlea: {
        marginTop: 1,
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        color: '#868686',
    },
    homeview1b: {
        position: 'relative',
    },
    homeview1c: {
        alignItems: 'center',
        left: '9%',
        top: '74%',
        position: 'absolute',
        flexDirection: 'row'
    },
    homeview1d: {
        alignItems: 'center',
        left: '9%',
        top: '85%',
        position: 'absolute',
        flexDirection: 'row'
    },
    homeview1ctitle: {
        marginLeft: '3%',
        fontFamily: 'Yu Gothic UI',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 20,
        color: '#FFFFFF',
    },
    homeview1f: {
        backgroundColor: '#EEA734',
        width: 36,
        height: 20,
        left: '69%',
        top: '85%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonback: {
        width: 24,
        height: 24,
        // backgroundColor: 'red',
    }
})