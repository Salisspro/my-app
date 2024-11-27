
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <View style={styles.appContainer}>
      <Text>Setting</Text>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})