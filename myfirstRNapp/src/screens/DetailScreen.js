import { Button, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'


const DetailsScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { GeneralResponse } = useSelector(state => state)
  return (
    <View style={{ flex: 1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Details Screen</Text>
      <Text>Dear {GeneralResponse.name}, your age is {GeneralResponse.age}</Text>
      <Button title='Go Back!' onPress={navigation.goBack} />
    </View>
  )
}

export default DetailsScreen
