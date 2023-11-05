import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Screen2 = () => {
    return (
        <View style={styles.body}>
            <View style={styles.top}>
                <Image style={styles.hinh} source={require('../../../media_phainop/backlab4.png')} />
                <Image style={styles.hinh2} source={require('../../../media_phainop/backlab41.png')} />
                <Text style={styles.tittle}>My Orders</Text>
                <Image style={styles.hinh3} source={require('../../../media_phainop/avatarlab4.png')} />
            </View>
            <View style={styles.homeview22}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonlogin}>Upcoming</Text>
                </Pressable>
                <Text style={styles.homeview22title}>History</Text>
            </View>
            <View style={styles.homeview3}>
                <Image style={styles.hinh4} source={require('../../../media_phainop/stabucklab4.png')} />
                <View style={styles.homeview3a}>
                    <Text style={styles.homeview3atittle1}>3 Items</Text>
                    <View style={styles.homeview3b}>
                        <Text style={styles.homeview3atittle2}>Starbuck</Text>
                        <Image style={styles.homeview3ahinh1} source={require('../../../media_phainop/tickxanh.png')} />
                    </View>
                </View>
                <Text style={styles.homeview3tittle1}>#264100</Text>
                <Text style={styles.homeview3tittle2}>Estimated Arrival</Text>
                <Text style={styles.homeview3tittle3}>min</Text>
                <Text style={styles.homeview3tittle4}>25</Text>
                <Text style={styles.homeview3tittle5}>Now</Text>
                <Text style={styles.homeview3tittle6}>Food on the way</Text>
                <View style={styles.homeview3c}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.buttonlogin1}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                        <Text style={styles.buttonlogin2}>Track Order</Text>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.tittle2}>Lasted Orders</Text>
            <View style={styles.homeview33}>
                <Image style={styles.hinh4a} source={require('../../../media_phainop/anh2lab4.png')} />
                <View style={styles.homeview3a1}>
                    <View style={styles.homeview3aa}>
                        <Text style={styles.homeview3atittle1}>20 Jun, 10:30</Text>
                        <Image style={styles.hinh5} source={require('../../../media_phainop/chamdenlab4.png')} />
                        <Text style={styles.homeview3atittle11}>3 Items</Text>
                    </View>
                    <View style={styles.homeview3b}>
                        <Text style={styles.homeview3atittle2}>Jimmy John’s </Text>
                        <Image style={styles.homeview3ahinh11} source={require('../../../media_phainop/tickxanh.png')} />
                    </View>
                    <View style={styles.homeview3aa}>
                        <Image style={styles.hinh6} source={require('../../../media_phainop/chamxanhlab4.png')} />
                        <Text style={styles.homeview3atittle22}>Order Delivered</Text>
                    </View>
                </View>
                <Text style={styles.homeview3tittle1a}>$17.10</Text>
                <View style={styles.homeview3c1}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.buttonlogin1}>Rate</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                        <Text style={styles.buttonlogin2}>Re-Order</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.homeview33}>
                <Image style={styles.hinh4a} source={require('../../../media_phainop/anh3lab4.png')} />
                <View style={styles.homeview3a1}>
                    <View style={styles.homeview3aa}>
                        <Text style={styles.homeview3atittle1}>19 Jun, 11:50</Text>
                        <Image style={styles.hinh5} source={require('../../../media_phainop/chamdenlab4.png')} />
                        <Text style={styles.homeview3atittle11}>2 Items</Text>
                    </View>
                    <View style={styles.homeview3b}>
                        <Text style={styles.homeview3atittle2}>Subway</Text>
                        <Image style={styles.homeview3ahinh1a} source={require('../../../media_phainop/tickxanh.png')} />
                    </View>
                    <View style={styles.homeview3aa}>
                        <Image style={styles.hinh6} source={require('../../../media_phainop/chamxanhlab4.png')} />
                        <Text style={styles.homeview3atittle22}>Order Delivered</Text>
                    </View>
                </View>
                <Text style={styles.homeview3tittle1a}>$20.50</Text>
                <View style={styles.homeview3c1}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.buttonlogin1}>Rate</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                        <Text style={styles.buttonlogin2}>Re-Order</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        padding: 16,
    },
    hinh2: {
        position: 'absolute',
        left: '11.47%',
        right: '87.2%',
        top: '6.28%',
        bottom: '92.55%',
        marginTop: 51,
    },
    hinh: {
        marginTop: 37,
        marginLeft: '6%',
    },
    tittle: {
        position: 'absolute',
        left: '11.47%',
        marginTop: 57,
        marginLeft: '30%',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 18,
        color: '#111719',
    },
    hinh3: {
        width: 38,
        width: 38,
        position: 'absolute',
        marginTop: 37,
        marginLeft: '81%',
    },
    homeview22: {
        marginLeft: '7%',
        flexDirection: 'row',
        marginTop: 32,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.1,
        width: '86%',
        borderRadius: 100,
    },
    button: {
        marginTop: 8,
        marginLeft: '2%',
        width: '49%',
        height: 44,
        backgroundColor: '#FE724C',
        justifyContent: 'center',
        borderRadius: 23.5,
    },
    buttonlogin: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 14,
        fontStyle: 'normal',
        color: '#FEFEFE',
        textAlign: 'center'
    },
    homeview22title: {
        marginTop: 22,
        marginLeft: '17%',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        color: '#FE724C',
    },
    homeview3: {
        position: 'relative',
        marginLeft: '7%',
        marginTop: 32,
        height: '29%',
        backgroundColor: '#FFFFFF',
        width: '86%',
        borderRadius: 18.2143,
    },
    homeview33: {
        position: 'relative',
        marginLeft: '7%',
        marginTop: 20,
        height: '21%',
        backgroundColor: '#FFFFFF',
        width: '86%',
        borderRadius: 18.2143,
    },
    hinh4: {
        position: 'absolute',
        left: 18,
        top: 18,
        right: 18,
        bottom: 21,
    },
    hinh4a: {
        position: 'absolute',
        left: 45,
        top: 25,
        right: 18,
        bottom: 21,
    },
    hinh5: {
        top: 3,
        marginLeft: 9,
    },
    hinh6: {
        top: 1,
        marginRight: 6,
    },
    homeview3atittle1: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 12,
        color: '#9796A1',
    },
    homeview3atittle11: {
        marginLeft: 9,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 12,
        color: '#9796A1',
    },
    homeview3atittle2: {
        marginTop: '10%',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        color: '#000000',
    },
    homeview3atittle22: {
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 12,
        color: '#4EE476',
    },
    homeview3a: {
        position: 'absolute',
        left: '31%',
        top: 39,
    },
    homeview3a1: {
        position: 'absolute',
        left: '31%',
        top: 10,
    },
    homeview3aa: {
        marginTop: '10%',
        flexDirection: 'row',
    },
    homeview3tittle1: {
        position: 'absolute',
        left: '75%',
        top: 23,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        color: '#FE724C',
    },
    homeview3tittle1a: {
        position: 'absolute',
        left: '80%',
        top: 18,
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        color: '#FE724C',
    },

    homeview3ahinh1: {
        position: 'absolute',
        left: 69,
        top: '50%',
    },
    homeview3ahinh1a: {
        position: 'absolute',
        left: 60,
        top: '60%',
    },
    homeview3ahinh11: {
        position: 'absolute',
        left: 103,
        top: '60%',
    },
    homeview3tittle2: {
        position: 'absolute',
        left: '6%',
        top: '44%',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 25,
        color: '#9796A1',
    },
    homeview3tittle3: {
        position: 'absolute',
        left: '20%',
        top: '61%',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 45,
        color: '#111719',
    },
    homeview3tittle4: {
        position: 'absolute',
        left: '6%',
        top: '61%',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 39.2727,
        lineHeight: 39,
        color: '#111719',
    },
    homeview3tittle5: {
        textAlign: 'right',
        marginRight: '7%',
        top: '45%',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 12,
        color: '#9796A1',
    },
    homeview3tittle6: {
        textAlign: 'right',
        marginRight: '7%',
        top: '52%',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 14,
        color: '#111719',
    },
    homeview3c: {
        position: 'absolute',
        left: '4%',
        top: '76%',
        flexDirection: 'row',
        height: 43,
        width: '89%',
        borderRadius: 100,
        justifyContent: 'space-between'
    },
    homeview3c1: {
        position: 'absolute',
        left: '4%',
        top: '65%',
        flexDirection: 'row',
        height: 43,
        width: '89%',
        borderRadius: 100,
        justifyContent: 'space-between'
    },
    button1: {
        marginTop: 4,
        marginLeft: '2%',
        width: '42%',
        height: 43,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        borderRadius: 100,
    },
    buttonlogin1: {
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 15,
        fontStyle: 'normal',
        color: '#000000',
        textAlign: 'center'
    },
    button2: {
        marginTop: 4,
        marginLeft: '2%',
        width: '42%',
        height: 43,
        backgroundColor: '#FE724C',
        justifyContent: 'center',
        borderRadius: 100,
    },
    buttonlogin2: {
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 15,
        fontStyle: 'normal',
        color: '#FEFEFE',
        textAlign: 'center'
    },
    tittle2: {
        marginTop: '4%',
        marginLeft: '7%',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 18,
        fontStyle: 'normal',
        color: '#111719',
    },
})