import { StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { getNewsDetail } from '../News/NewsService';
import { getNews } from './NewsService'
import { UserContext } from '../User/UserContext';

const Detail = (props) => {
    const { user } = useContext(UserContext);
    const { navigation, route } = props;
    const [news, setNews] = useState([]);


    const { id } = route?.params;
    const [newDetail, setNewDetail] = useState(null);
    const onGatenewDetail = async () => {
        if (!id) return

        const data = await getNewsDetail(id);
        setNewDetail(data[0]);
    }



    const onGetNews = async () => {
        setloading(true);
        const news = await getNews();
        setNews(news);
        setloading(false);
    }

    useEffect(() => {
        onGatenewDetail();

    }, [id]);

    useEffect(() => {
        onGetNews();

    }, [id]);

    // useEffect(() => {
    //     onGetNews();
    // }, []);

    // const renderItem = ({ item }) => {
    //     return (
    //         <Text style={styles.homeview3ctitle1}>{item.createdBy.name}</Text>
    //     )
    // }

    if (!newDetail) {
        return <View><Text>loading</Text></View>
    }
    return (
        <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.home}>
                    <View style={styles.homeview1}>
                        <Pressable style={styles.iconhomeview2} onPress={() => navigation.goBack()}>
                            <Image style={styles.iconhomeview1} source={require('../media_phainop/back.png')} />
                        </Pressable>
                        <View style={styles.homeview1a}>
                            <Image style={[styles.iconhomeview1, styles.iconhomeview1a]} source={require('../media_phainop/share.png')} />
                            <Image source={require('../media_phainop/bacham.png')} />
                        </View>
                    </View>
                    <View style={styles.homeview2}>
                        <View style={styles.homeview2a}>
                            <Image style={styles.iconbbc} source={{ uri: newDetail.image }} />
                            <View style={styles.homeview2b}>
                                <Text style={styles.homeview2btittle1}>Unknow Poster</Text>
                                <Text style={styles.homeview2btittle2}>{newDetail.createdAt}</Text>
                            </View>
                        </View>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonlogin}>Following</Text>
                        </Pressable>
                    </View>
                    <Image style={styles.hinhchinh} source={{ uri: newDetail.image }} />
                    <View style={styles.homeview3}>
                        <Text style={styles.homeview3btittle1}>{newDetail.title}</Text>
                    </View>
                    <Text style={styles.tittlechinh}>{newDetail.content}</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomview1}>
                        <View style={styles.bottomview2}>
                            <Image style={[styles.iconhomeview1, styles.iconhomeview1a]} source={require('../media_phainop/icontim.png')} />
                            <Text style={styles.bottomtittle}>24.5K</Text>
                        </View>
                        <View style={styles.bottomview2}>
                            <Image style={[styles.iconhomeview1, styles.iconhomeview1a]} source={require('../media_phainop/iconcmt.png')} />
                            <Text style={styles.bottomtittle}>1K</Text>
                        </View>
                    </View>
                    <View style={styles.bottomview2}>
                        <Image style={styles.iconghim} source={require('../media_phainop/iconghim.png')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding: 24,
    },
    home: {
        backgroundColor: 'white',
        width: 428,
        height: 920,
    },
    bottom: {
        width: 450,
        height: 78,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview1a: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    homeview2: {
        marginTop: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    homeview2a: {
        flexDirection: 'row',
    },
    homeview2b: {
        justifyContent: 'space-around',
    },
    homeview3: {
        marginTop: 16,
    },
    bottomview1: {
        width: 156,
        height: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    bottomview2: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconhomeview2: {
        width: 36,
        height: 36,
    },
    iconhomeview1a: {
        width: 19,
        height: 20,
        marginRight: 8,
    },
    iconbbc: {
        marginRight: 8,
        width: 50,
        height: 50,
    },
    iconbbc: {
        marginRight: 8,
        width: 50,
        height: 50,
    },
    homeview2btittle1: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    homeview2btittle2: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    button: {
        marginTop: 8,
        width: 102,
        height: 34,
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
    hinhchinh: {
        width: 428,
        height: 300,
        marginTop: 16,
        borderRadius: 6,
    },
    homeview3btittle1: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.12,
        color: '#000000',
    },
    homeview3btittle2: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    tittlechinh: {
        marginTop: 16,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    bottomtittle: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#050505',
    },

})