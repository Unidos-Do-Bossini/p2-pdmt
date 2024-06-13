import React, { useState } from 'react'
import { Text, Pressable, FlatList, View, Image, ActivityIndicator, Alert } from 'react-native';
import { getGato } from './services/GatitosService.js';
import styles from './styles.js';

export default function App() {
  const [fotos, setFotos] = useState([])
  const [loading, setLoading] = useState(false)

  const getFotos = async () => {
    setLoading(true)
    try{
      const request = await getGato()
      setFotos(prevFotos => [...request.slice(0, 5), ...prevFotos])
    }catch(error){
      Alert.alert('Erro', 'Nao foi possivel carregar as imagens. Tente de novo.')
    }finally{
      setLoading(false)
    }
    
    
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
      {loading  ? (<ActivityIndicator size="large" color="#0000ff"/>
      ) : (<FlatList
      contentContainerStyle={styles.listContainer}
      data={fotos}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ></FlatList>)}
    </View>
  );
}