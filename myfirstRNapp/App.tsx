/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Welcome to <Text style={styles.customText}>React Native</Text>
        {'\n'}
        TypeScript Starter!{'\n'}
      </Text>
      <TouchableOpacity onPress={() => console.log('image pressed')}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.image}
          resizeMode="contain"
          blurRadius={15}
        />
      </TouchableOpacity>
      <TouchableHighlight onPress={() => console.log('pressed')}>
        <View style={{width: '100%', height: 75, backgroundColor: 'cyan'}}>
          <Text>Hello World!</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <View style={{width: '100%', height: 75, backgroundColor: 'red'}}>
          <Text>Hello World!</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
        <View style={{width: '100%', height: 75, backgroundColor: 'yellow'}}>
          <Text>Hello World!</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  customText: {
    fontSize: 16,
    color: 'yellow',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'red',
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default App;
