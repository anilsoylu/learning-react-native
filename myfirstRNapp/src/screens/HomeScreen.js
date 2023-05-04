import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { SetName } from '../redux/action'

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { GeneralResponse } = useSelector(state => state)

  return (
    <View style={{ flex: 1, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Home Screen</Text>
      <Text>Name: {GeneralResponse.name} Age : {GeneralResponse.age}</Text>
      <TextInput
        style={{ width: 200, height: 50, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', padding: 7, marginVertical: 7 }}
        placeholder='Enter your name'
        value={GeneralResponse.name}
        onChangeText={(text) => dispatch(SetName(text))}
      />
      <Button onPress={() => navigation.navigate("DetailsScreen")} title='Go to Details Screen' />
    </View>
  )
}

export default HomeScreen
