import React, { useState } from 'react'
import { Text, Pressable, FlatList, View, Image } from 'react-native';
import { getGato } from './services/GatitosService.js';
import styles from './styles.js';

export default function App() {
  const [fotos, setFotos] = useState([])

  const getFotos = async () => {
    const request = await getGato()
    setFotos(prevFotos => [
      ...request.slice(0, 5), ...prevFotos
    ]
    )
  }

  const renderItem = ({item}) => (
    <Image
      source={{uri: item.url}}
      style={styles.image}
    />
  ) 

  return (
    <View style={styles.container}>
      <Pressable
        onPress={getFotos}
        style={({pressed}) => 
          [
            styles.button, 
          { backgroundColor: pressed ? '#0D47A1' : '#1A237E',}
          ]
      }
          >
        <Text style={styles.buttonText}>CLICA AQUI</Text>
      </Pressable>
      <FlatList
      data={fotos}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
}
