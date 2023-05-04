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
  },

  view1: {
    flex: 1,
    backgroundColor: 'purple',
  },

  view2: {
    flex: 2,
    backgroundColor: 'yellow',
  },

  view3: {
    flex: 2,
    backgroundColor: 'red',
  },
});
