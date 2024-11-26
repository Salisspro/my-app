

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.app}>
      <Text>salisspro</Text>
      <TouchableOpacity style={{backgroundColor: '#161620', padding: 15, width: 270, borderRadius: 5, margin: 20}}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Let get started</Text>
      </TouchableOpacity>
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