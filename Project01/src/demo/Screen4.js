import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'

const renderItem = (value) => {
    const { item } = value
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{item.charAt(0).first_name} </Text>
        </View>
    )
}

const Screen4 = () => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            DATA[5].first_name = 'Nguyen Van A'
            setRefreshing(false);
        }, 2000);
    }
    return (
        <View>
            {/* <ScrollView style={styles.scroll}>
                {
                    DATA.map((item, index) => {
                        return (
                            <Text>{item.first_name}</Text>
                        )
                    }
                    )
                }
            </ScrollView> */}
            <FlatList onRefresh={onRefresh}
                refreshing={refreshing} data={DATA} renderItem={renderItem} keyExtractor={(item, index) => item.id} />
        </View>
    )
}

export default Screen4

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'lightgray',
        width: '100%'

    }
})

var DATA = [{
    "id": 1,
    "first_name": "Torry",
    "last_name": "Eastment"
}, {
    "id": 2,
    "first_name": "Almeria",
    "last_name": "Puddin"
}, {
    "id": 3,
    "first_name": "Welch",
    "last_name": "Pietrzyk"
}, {
    "id": 4,
    "first_name": "Verge",
    "last_name": "Meriguet"
}, {
    "id": 5,
    "first_name": "Clemmie",
    "last_name": "Gibling"
}, {
    "id": 6,
    "first_name": "Sonnie",
    "last_name": "Lowen"
}, {
    "id": 7,
    "first_name": "Dorthea",
    "last_name": "Clell"
}, {
    "id": 8,
    "first_name": "Cameron",
    "last_name": "Aldersey"
}, {
    "id": 9,
    "first_name": "Odell",
    "last_name": "Dittson"
}, {
    "id": 10,
    "first_name": "Syman",
    "last_name": "Kunneke"
}, {
    "id": 11,
    "first_name": "Frederich",
    "last_name": "Eyeington"
}, {
    "id": 12,
    "first_name": "Annora",
    "last_name": "Gianetti"
}, {
    "id": 13,
    "first_name": "Glenna",
    "last_name": "Ferrandez"
}, {
    "id": 14,
    "first_name": "Ahmed",
    "last_name": "Letten"
}, {
    "id": 15,
    "first_name": "Burlie",
    "last_name": "Yuryev"
}, {
    "id": 16,
    "first_name": "Ephraim",
    "last_name": "Bartrop"
}, {
    "id": 17,
    "first_name": "Lucine",
    "last_name": "Grece"
}, {
    "id": 18,
    "first_name": "Fidelio",
    "last_name": "Martinets"
}, {
    "id": 19,
    "first_name": "Ives",
    "last_name": "Valentine"
}, {
    "id": 20,
    "first_name": "Verina",
    "last_name": "Jestico"
}, {
    "id": 21,
    "first_name": "Jeffrey",
    "last_name": "McIsaac"
}, {
    "id": 22,
    "first_name": "Cos",
    "last_name": "Darko"
}, {
    "id": 23,
    "first_name": "Travus",
    "last_name": "Crux"
}, {
    "id": 24,
    "first_name": "Julian",
    "last_name": "Carpmile"
}, {
    "id": 25,
    "first_name": "Wesley",
    "last_name": "Parmley"
}, {
    "id": 26,
    "first_name": "Annora",
    "last_name": "Fransewich"
}, {
    "id": 27,
    "first_name": "Wiley",
    "last_name": "Keston"
}, {
    "id": 28,
    "first_name": "Liva",
    "last_name": "Snawdon"
}, {
    "id": 29,
    "first_name": "Morissa",
    "last_name": "Boyton"
}, {
    "id": 30,
    "first_name": "Dal",
    "last_name": "O'Caherny"
}, {
    "id": 31,
    "first_name": "Caty",
    "last_name": "McVeagh"
}, {
    "id": 32,
    "first_name": "Victoir",
    "last_name": "Postin"
}, {
    "id": 33,
    "first_name": "Brewster",
    "last_name": "Greest"
}, {
    "id": 34,
    "first_name": "Artemas",
    "last_name": "Whittlesee"
}, {
    "id": 35,
    "first_name": "Jania",
    "last_name": "Vosper"
}, {
    "id": 36,
    "first_name": "Krissy",
    "last_name": "Jaray"
}, {
    "id": 37,
    "first_name": "Cherie",
    "last_name": "Wyndham"
}, {
    "id": 38,
    "first_name": "Siana",
    "last_name": "Ballinger"
}, {
    "id": 39,
    "first_name": "Fonzie",
    "last_name": "Coucher"
}, {
    "id": 40,
    "first_name": "Hans",
    "last_name": "Mapplebeck"
}, {
    "id": 41,
    "first_name": "Markus",
    "last_name": "Syder"
}, {
    "id": 42,
    "first_name": "Tania",
    "last_name": "Creggan"
}, {
    "id": 43,
    "first_name": "Byrom",
    "last_name": "Breznovic"
}, {
    "id": 44,
    "first_name": "Georges",
    "last_name": "Durbann"
}, {
    "id": 45,
    "first_name": "Gwenora",
    "last_name": "Ferran"
}, {
    "id": 46,
    "first_name": "Merl",
    "last_name": "Waplinton"
}, {
    "id": 47,
    "first_name": "Stephan",
    "last_name": "Boij"
}, {
    "id": 48,
    "first_name": "Tawnya",
    "last_name": "Carson"
}, {
    "id": 49,
    "first_name": "Tabitha",
    "last_name": "Galbreath"
}, {
    "id": 50,
    "first_name": "Trueman",
    "last_name": "Beiderbecke"
}]