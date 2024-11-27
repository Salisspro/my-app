
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.appContainer}>
        <StatusBar backgroundColor='#161616'/>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})