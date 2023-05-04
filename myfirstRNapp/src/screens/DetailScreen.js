import { Button, Text, View } from 'react-native'
import React from 'react'
import { useNavigation , useRoute} from '@react-navigation/native'

const DetailsScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  return (
    <View style={{flex:1, backgroundColor:'cyan', alignItems:'center', justifyContent:'center'}}>
      <Text>Welcome Details Screen</Text>
      <Text>Dear {route.params.name}</Text>
      <Button title='Go Back!' onPress={navigation.goBack} />
    </View>
  )
}

export default DetailsScreen
