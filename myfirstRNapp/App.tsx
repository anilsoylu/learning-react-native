/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

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
      <Text style={{marginTop: 10}}>Text: {name}</Text>
      <Button title="Press Me!" onPress={() => console.log('Button Pressed')} />
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

  button: {
    marginTop: 10,
  },
});

export default App;
