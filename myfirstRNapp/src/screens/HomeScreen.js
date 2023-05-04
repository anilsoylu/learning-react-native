import { Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  return (
    <View style={{flex:1, backgroundColor:'cyan', alignItems:'center', justifyContent:'center'}}>
      <Text>Welcome Home Screen</Text>
      <TextInput
        style={{ width: 200, height: 50, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', padding: 7, marginVertical: 7 }}
        placeholder='Enter your name'
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button onPress={() => navigation.navigate("DetailsScreen", {name})} title='Go to Details Screen'/>
    </View>
  )
}

export default HomeScreen
