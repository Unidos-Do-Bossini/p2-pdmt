import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, FlatList, View, Image } from 'react-native';
import { getGato } from './services/GatitosService.js';

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
      style={{width: '30%', height: 200, marginVertical: 10}}
    />
  ) 

  return (
    <View style={{flex: 1, padding: 20}}>
      <Pressable
        onPress={getFotos}
        style={({pressed}) => [{
          backgroundColor: pressed ? '#FF0000' : '#FFFF00',
          padding: 20,
          alignItems: 'center',
          marginBottom: 10
        }]
      }
          >
        <Text>CLICA AQUI</Text>
      </Pressable>
      <FlatList
      data={fotos}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </View>
  );
}
