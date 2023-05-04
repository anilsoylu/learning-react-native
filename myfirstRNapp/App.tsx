/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Welcome to <Text style={styles.customText}>React Native</Text>
        {'\n'}
        TypeScript Starter!{'\n'}
      </Text>
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
});

export default App;
