
import { Button, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View style={styles.app}>
            <ImageBackground
                style={{ flex: 1, width: '100%', height: '100%' }}
                resizeMode='contain'
                source={require('../assets/Logo/logo2.png')}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', margin: 20 }}>
                    <StatusBar backgroundColor='#161616' />

                    <TouchableOpacity style={{ backgroundColor: '#161616', padding: 15, width: 270, borderRadius: 5, margin: 20 }}>

                        <Link
                            style={{ color: '#fff', textAlign: 'center' }}
                            href='./Home'>
                            Get Started
                        </Link>

                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})