import { Image, Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { getItemNewsuser } from './NewsService';
import { UserContext } from '../User/UserContext';

const Profile2 = (props) => {
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
                        <Text style={styles.homeview3ctitle1}>{user.name}</Text>
                        <Image style={styles.icondhhomeview3c} source={require('../media_phainop/dongho.png')} />
                        <Text style={styles.homeview3ctitle2}>{item.createdAt}</Text>
                    </View>
                </View>
            </View >
        )
    }
    return (
        <View style={styles.body}>
            <View style={styles.homeview1}>
                <Text style={styles.homeview1title}>Profile</Text>
                <Image source={require('../media_phainop/banhrangcua.png')} />
            </View>
            <View style={styles.homeview2}>
                <Image style={{width: 120, height: 120, borderRadius: 60,}} source={{ uri: user.avatar }}></Image>
                <View style={styles.homeview2a}>
                    <Text style={styles.homeview2title1}>2156</Text>
                    <Text style={styles.homeview2title2}>Follower</Text>
                </View>
                <View style={styles.homeview2a}>
                    <Text style={styles.homeview2title1}>567</Text>
                    <Text style={styles.homeview2title2}>Following</Text>
                </View>
                <View style={styles.homeview2a}>
                    <Text style={styles.homeview2title1}>23</Text>
                    <Text style={styles.homeview2title2}>News</Text>
                </View>
            </View>
            <Text style={styles.titlename}>{user.name}</Text>
            <Text style={styles.titlecontent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <View style={styles.homeview3}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Edit')}>
                    <Text style={styles.buttonlogin}>Edit Profile</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonlogin}>Website</Text>
                </Pressable>
            </View>
            <Text style={styles.titlemynews}>My news</Text>
            <FlatList
                style={{ height: '100%', width: '95%', }}
                data={news}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                onRefresh={onGatenew}
                refreshing={loading}
            />
            <Pressable onPress={() => navigation.navigate('Add')}>
                <Image style={styles.add} source={require("../media_phainop/Add.png")} />
            </Pressable>
        </View>
    )
}

export default Profile2
    
const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        padding: 24,
    },
    homeview1: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        marginLeft: '45%',
    },
    homeview1title: {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    homeview2: {
        width: '95%',
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeview2title1: {
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
        textAlign: 'center',
    },
    homeview2title2: {
        fontFamily: 'Poppins',
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    homeview2a: {
        justifyContent: 'center',
    },
    titlename: {
        marginTop: '3%',
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    titlecontent: {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    button: {
        width: '45%',
        height: 50,
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
    homeview3: {
        width: '95%',
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    titlemynews: {
        marginTop: '8%',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    add: {
        left: '85%',
    }
})