import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  Alert,
  Dimensions,
} from 'react-native';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.error(error));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.error(error))
      .finally(() => setRefreshing(false));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.photo}>
        <Image
          source={{uri: item.url}}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handlePress = item => {
    Alert.alert(
      'Photo Info',
      `Title: ${item.title}\nAlbum ID: ${item.albumId}`,
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 10,
  },
  photo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
});
