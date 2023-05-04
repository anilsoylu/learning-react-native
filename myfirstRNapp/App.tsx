import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    flexDirection: 'row',
  },

  view1: {
    width: 100,
    height: 75,
    backgroundColor: 'purple',
  },

  view2: {
    width: 100,
    height: 75,
    backgroundColor: 'yellow',
  },

  view3: {
    width: 100,
    height: 75,
    backgroundColor: 'red',
  },
});
