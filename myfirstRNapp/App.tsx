import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    console.log('useEffect sadece count değiştiğinde çalışır');
  }, [count]);

  useEffect(() => {
    console.log('useEffect sadece ilk renderda çalışır');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
  },
});
