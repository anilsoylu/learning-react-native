import React from 'react';
import {Platform, Text, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text style={[styles.text, styles.title]}>
        This is an {Platform.OS === 'ios' ? 'iOS' : 'Android'} app!
      </Text>
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
