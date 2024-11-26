

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.app}>
      <Text>index</Text>
      <Text style={{padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto laborum corrupti officiis voluptate perspiciatis blanditiis, iste hic natus illo repudiandae iure saepe assumenda provident molestiae reiciendis totam? Eos, voluptatibus qui.</Text>
      <Button title='click me'/>
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