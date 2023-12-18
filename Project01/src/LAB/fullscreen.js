import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const fullscreen = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <Button title="Go to Screen 1" onPress={() => navigation.navigate('so1')} />
            <Button title="Go to Screen 2" onPress={() => navigation.navigate('so2')} />
            <Button title="Go to Screen 3" onPress={() => navigation.navigate('so3')} />
            <Button title="Go to Screen 4" onPress={() => navigation.navigate('so4')} />
            <Button title="Go to Screen 5" onPress={() => navigation.navigate('so5')} />
        </View>
    )
}

export default fullscreen

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '80%',
        padding: 16,
        justifyContent: 'space-evenly',
    }
})