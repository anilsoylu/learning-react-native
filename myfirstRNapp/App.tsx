import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ColoredView1 from './ColoredView1';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ColoredView1 bgColor={'purple'} text="Hello" />
      <ColoredView1 bgColor={'yellow'} text="Anıl" />
      <ColoredView1 bgColor={'red'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
  },
});
