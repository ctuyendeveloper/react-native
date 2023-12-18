import { FlatList, StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNews } from './NewsService'
import AxiosInstance from "../helpers/AxiosHelper";



const Home2 = (props) => {
    const { navigation } = props;
    const [news, setNews] = useState([]);
    const [loading, setloading] = useState(false);

    const onGetNews = async () => {
        setloading(true);
        const news = await getNews();
        setNews(news);
        setloading(false);
    }

    let timeout = null;
    const cutDoutSearch = (searchText) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            onSearch(searchText);
        }, 1000);
    }

    const onSearch = async (searchText) => {
        setloading(true);
        const search = await AxiosInstance().get("articles/search?title=" + searchText);
        if (search.error == false) {
            console.log(search.data);
            setNews(search.data);
            setloading(false);
        } else {
            console.log("Không lấy được dữ liệu");
        }
    }


    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => navigation.navigate('Detail',
                { id: item._id }
            )}>
                < View style={styles.homeview3f} >
                    <Image style={styles.iconhinhhview3f} source={{ uri: item.image }} />
                    <View style={styles.homeview3f1}>
                        <Text style={styles.homeview3f1title2}>{item.title}</Text>
                        <View style={styles.homeview3c}>
                            <Image style={styles.iconbbchomeview3c} source={{ uri: item.image }} />
                            <Text style={styles.homeview3ctitle1}>{item.createdBy.name}</Text>
                            <Image style={styles.icondhhomeview3c} source={require('../media_phainop/dongho.png')} />
                            <Text style={styles.homeview3ctitle2}>{item.createdAt}</Text>
                        </View>
                    </View>
                </View >
            </Pressable>
        )



    }

    useEffect(() => {
        onGetNews();
    }, []);

    return (
        <View style={styles.body}>
            <View style={styles.homeview1}>
                <Image style={styles.icon} source={require('../media_phainop/Vector.png')} />
                <Image style={styles.icon} source={require('../media_phainop/chuong.png')} />
            </View>
            <View style={styles.homeview2}>
                <TouchableOpacity onPress={onSearch}>
                    <Image style={styles.iconsearchhomeview2} source={require('../media_phainop/search.png')} />
                </TouchableOpacity>
                <TextInput style={styles.textinputhomeview2} placeholder='Search' onChangeText={(text) => cutDoutSearch(text)}></TextInput>
            </View>
            <View style={styles.homeview3a}>
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
            <FlatList
                style={styles.list}
                data={news}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                onRefresh={onGetNews}
                refreshing={loading} />
        </View>
    )
}

export default Home2

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: 'white',
    },
    homeview3f: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 24,
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
    homeview3f1title1: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4E4B66',
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
    homeview2: {
        position: 'relative',
        borderWidth: 1,
        borderRadius: 6,
        height: 48,
        flexDirection: 'row',
    },
    iconsearchhomeview2: {
        position: 'absolute',
        top: 12,
        left: 10,
        bottom: 12,
        right: 10,
    },
    iconsearchphaihomeview2: {
        position: 'absolute',
        top: 12,
        left: 396,
    },
    textinputhomeview2: {
        position: 'absolute',
        left: 38,
        bottom: 0.5,
    },
    homeview1: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview3a: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 16,
    },
    homeview3hinh: {
           
        width: '100%',
        borderRadius: 6,
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
    homeview3btitle2: {
        marginBottom: 4,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
})
