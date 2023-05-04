/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Anıl');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="What is your name?"
        value={name}
        onChangeText={text => setName(text)}
        secureTextEntry={true}
      />
      <Text style={styles.text}>Text: {name}</Text>
      {/* <Button
        title="Press Me!"
        onPress={() =>
          Alert.alert(`Hello ${name} do you enjoy the tutorial`, '', [
            {text: 'Yes', onPress: () => console.log('Yes Pressed')},
            {text: 'No', onPress: () => console.log('No Pressed')},
          ])
        }
      /> */}
      <Button
        title="Press Me!"
        onPress={() =>
          Alert.prompt(`Hello ${name}!`, 'How old are you?', text =>
            console.log(`You are ${text} years old`),
          )
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    width: 200,
    height: 50,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  button: {
    marginTop: 10,
  },
});

export default App;
