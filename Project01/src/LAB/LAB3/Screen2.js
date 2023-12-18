import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'

const Screen2 = () => {
    return (
        <ScrollView>
        <View style={styles.body}>
            <Image style={styles.hinh} source={require('../../../media_phainop/hinh2lab3.png')} />
            <View style={styles.view1}>
                <Text style={styles.tittle1}>Lets Get Started</Text>
                <Text style={styles.tittle2}>Create An Account</Text>
                <View style={styles.homeview2}>
                    <Image style={styles.icon} source={require('../../../media_phainop/namelab3.png')} />
                    <TextInput style={styles.tittle3} placeholder='Name'></TextInput>
                </View>
                <View style={styles.homeview2}>
                    <Image style={styles.icon} source={require('../../../media_phainop/maillab3.png')} />
                    <TextInput style={styles.tittle3} placeholder='Email Address'></TextInput>
                </View>
                <View style={styles.homeview2}>
                    <Image style={styles.icon} source={require('../../../media_phainop/passlab3.png')} />
                    <TextInput style={styles.tittle3} placeholder='Password'></TextInput>
                </View>
                <View style={styles.homeview3}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonlogin}>CREATE ACCOUNT</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Screen2

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
    },
    hinh: {
        width: '100%',
    },
    view1: {
        padding: 16,
        height: '100%',
        backgroundColor: 'rgba(255, 139, 106, 0.7616)',
    },
    tittle1: {
        textAlign: 'center',
        marginTop: 13,
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 29,
        color: '#FFFFFF',
    },
    tittle2: {
        marginLeft: 28,
        marginTop: 14,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 22,
        lineHeight: 27,
        color: '#FFFFFF',
    },
    homeview2: {
        backgroundColor: 'white',
        position: 'relative',
        // marginLeft: 28,
        marginTop: 27,
        borderRadius: 8,
        height: 52,
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
    },
    icon: {
        left: 18,
        right: 25,
        top: 18,
        bottom: 10,
        position: 'absolute',
        width: 24,
        height: 24,
    },
    tittle3: {
        top: 4,
        left: 63,
        position: 'absolute',
    },
    button: {

        width: 228,
        height: 59,
        backgroundColor: 'rgba(255, 139, 106, 1)',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonlogin: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 22,
        fontStyle: 'normal',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    homeview3: {
        marginTop: 27,
        flexDirection: 'row',
        justifyContent: 'center',
      },
})