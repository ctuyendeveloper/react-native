import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.body}>
                <View style={styles.home}>
                    <View style={styles.homeview1}>
                        <Image style={styles.icon} source={require('../media_phainop/Vector.png')} />
                        <Image style={styles.icon} source={require('../media_phainop/chuong.png')} />
                    </View>
                    <View style={styles.homeview2}>
                        {/* <Image style={styles.iconsearchhomeview2} source={require('../media_phainop/search.png')} />
                    <TextInput style={styles.textinputhomeview2} placeholder='Search'></TextInput>
                    <Image style={styles.iconsearchphaihomeview2} source={require('../media_phainop/phaisearch.png')} /> */}
                    </View>
                    <View style={styles.homeview3}>
                        <View style={styles.homeview3a2}>
                            <Text style={styles.homeview3atrend}>Trending</Text>
                            <Text style={styles.homeview3asee}>See all</Text>
                        </View>
                        <View style={styles.homeview3b}>
                            <Image style={styles.homeview3hinh} source={require('../media_phainop/anh1.png')} />
                            <Text style={styles.homeview3btitle1}>Bitcoin</Text>
                            <Text style={styles.homeview3btitle2}>Lorem Ipsum is simply dummy text of the printing</Text>
                            <View style={styles.homeview3c}>
                                <Image style={styles.iconbbchomeview3c} source={require('../media_phainop/logobbc.png')} />
                                <Text style={styles.homeview3ctitle1}>BBC News</Text>
                                <Image style={styles.icondhhomeview3c} source={require('../media_phainop/dongho.png')} />
                                <Text style={styles.homeview3ctitle2}>4h ago</Text>
                            </View>
                        </View>
                        <View style={styles.homeview3a}>
                            <Text style={styles.homeview3atrend}>Latest</Text>
                            <Text style={styles.homeview3asee}>See all</Text>
                        </View>
                        <View style={styles.homeview3e}>
                            <View>
                                <Text style={[styles.homeview3etitle2, styles.homeview3etitle1]}>All</Text>
                                <Text style={styles.homeview3etitle3}>___</Text>
                            </View>
                            <Text style={styles.homeview3etitle2}>Sports</Text>
                            <Text style={styles.homeview3etitle2}>Politics</Text>
                            <Text style={styles.homeview3etitle2}>Bussiness</Text>
                            <Text style={styles.homeview3etitle2}>Health</Text>
                            <Text style={styles.homeview3etitle2}>Travel</Text>
                            <Text style={styles.homeview3etitle2}>Science</Text>
                            <Text style={styles.homeview3etitle2}>Fashion</Text>
                        </View>
                 
                        <View style={styles.homeview3f}>
                            <Image style={styles.iconhinhhview3f} source={require('../media_phainop/hinh2.png')} />
                            <View style={styles.homeview3f1}>
                                <Text style={styles.homeview3f1title1}>Crypto</Text>
                                <Text style={styles.homeview3f1title2}>Ukraine's President Zelensky to BBC: Blood money being paid...</Text>
                                <View style={styles.homeview3c}>
                                    <Image style={styles.iconbbchomeview3c} source={require('../media_phainop/logobbc.png')} />
                                    <Text style={styles.homeview3ctitle1}>BBC News</Text>
                                    <Image style={styles.icondhhomeview3c} source={require('../media_phainop/dongho.png')} />
                                    <Text style={styles.homeview3ctitle2}>4h ago</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.homeview3f}>
                            <Image style={styles.iconhinhhview3f} source={require('../media_phainop/hinh3.png')} />
                            <View style={styles.homeview3f1}>
                                <Text style={styles.homeview3f1title1}>Travel</Text>
                                <Text style={styles.homeview3f1title2}>Her train broke down. Her phone died. And then she met her...</Text>
                                <View style={styles.homeview3c}>
                                    <Image style={styles.iconbbchomeview3c} source={require('../media_phainop/logobbc.png')} />
                                    <Text style={styles.homeview3ctitle1}>BBC News</Text>
                                    <Image style={styles.icondhhomeview3c} source={require('../media_phainop/dongho.png')} />
                                    <Text style={styles.homeview3ctitle2}>4h ago</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            <View style={styles.bottom}>
                <View style={styles.bottomitem}>
                    <Image style={styles.iconbottom} source={require('../media_phainop/home.png')} />
                    <Text style={[styles.bottomtitle, styles.bottomtitle1]}>Home</Text>
                </View>
                <View style={styles.bottomitem}>
                    <Image style={styles.iconbottom} source={require('../media_phainop/laban.png')} />
                    <Text style={styles.bottomtitle}>Explore</Text>
                </View>
                <View style={styles.bottomitem}>
                    <Image style={styles.iconbottom} source={require('../media_phainop/Bookmark.png')} />
                    <Text style={styles.bottomtitle}>Bookmark</Text>
                </View>
                <Button title='back' style={styles.bottomitem} onPress={() => navigation.navigate('full')}>
                    {/* <Image style={styles.iconbottom} source={require('../media_phainop/back.png')} /> */}
                    {/* <Text style={styles.bottomtitle}>Profile</Text> */}
                </Button>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding: 24,
        position: 'relative',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        // height: '90%',
    },
    home: {
        // backgroundColor: 'red',
        width: '100%',
    },
    bottom: {
    
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    homeview1: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview2: {
        position: 'relative',
        borderWidth: 1,
        borderRadius: 6,
        height: 48,
        position: 'relative',
        flexDirection: 'row',
    },
    homeview3: {
        marginTop: 16,
    },
    homeview3a: {
        marginTop: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview3a2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview3abonus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsearchhomeview2: {
        position: 'absolute',
        top: 12,
        left: 10,
        bottom: 12,
        right: 10,
    },
    textinputhomeview2: {
        position: 'absolute',
        left: 38,
        bottom: 0.5,
    },
    iconsearchphaihomeview2: {
        position: 'absolute',
        top: 12,
        left: 396,
    },
    iconsearchphaihomeview2: {
        position: 'absolute',
        top: 12,
        left: 396,
    },
    homeview3atrend: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    homeview3asee: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    homeview3b: {
        // backgroundColor: 'red',
        width: '100%',
        height: '32%',
    },
    homeview3f: {
        flexDirection: 'row',
        marginTop: 16,
        width: '100%',
    },
    homeview3hinh: {
        width: '100%',
        borderRadius: 6,
        height: '100%',
    },
    homeview3c: {
        flexDirection: 'row',
    },
    homeview3f1: {
        marginLeft: 4,
        height: 96,
        width: '70%',
        justifyContent: 'space-between',
    },
    homeview3btitle1: {
        marginTop: 8,
        marginBottom: 4,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    homeview3f1title1: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    homeview3f1title2: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    homeview3btitle2: {
        marginBottom: 4,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    iconbbchomeview3c: {
        width: 20,
        height: 20,
        marginRight: 4,
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
    homeview3e: {
        width: '100%',
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview3etitle1: {
        color: '#000000',
    },
    homeview3etitle2: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
        marginRight: 10,
    },
    homeview3etitle3: {
        color: '#1877F2',
    },
    iconhinhhview3f: {
        width: 96,
        height: 96,
        borderRadius: 6,
    },
    bottomitem: {
        alignItems: 'center',
    },
    iconbottom: {
        marginTop: 5.5,
        width: 24,
        height: 24,
    },
    bottomtitle1: {
        color: '#1877F2',
    },
    bottomtitle: {
        marginTop: 4,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    }
})