

import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View style={styles.app}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', margin: 20 }}>
                <StatusBar backgroundColor='#161616'/>

                <TouchableOpacity style={{ backgroundColor: '#161620', padding: 15, width: 270, borderRadius: 5, margin: 20 }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Get started</Text>

                </TouchableOpacity>
            </View>

                    
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