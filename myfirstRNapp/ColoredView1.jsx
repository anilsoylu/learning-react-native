import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function ColoredView1(props) {
  return (
    <View style={[styles.view1, { backgroundColor: props.bgColor }]} >
      <Text>{ props.text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  view1: {
    flex:1
  },
})

export default ColoredView1