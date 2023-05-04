import React from 'react';
import {
  Platform,
  Dimensions,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export default function App() {
  console.log(Platform.OS, Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        This is an {Platform.OS === 'ios' ? 'iOS' : 'Android'} app!
      </Text>
      <Text style={styles.title}>
        height: {Dimensions.get('screen').height}
      </Text>
      <Text style={styles.title}>width: {Dimensions.get('screen').width}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Platform.OS === 'ios' ? 'blue' : 'green',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
});
