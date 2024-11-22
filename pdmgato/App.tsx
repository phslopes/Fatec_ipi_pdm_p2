import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import ListaImagens from './component/ListaImagens';

export default function App() {
  const [imagens, setImagens] = useState<string[]>([]); 

  return (
    <View style={styles.container}>
      <ListaImagens setImagens={setImagens} />
      <FlatList
        data={imagens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => 
        <Image source={{ uri: item }} style={styles.imagem} />}
        style={styles.lista}
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
  lista:   {
    width:'100%',
    marginTop: 80,
    borderRadius: 4,
    padding: 4,
    alignContent:'center',
  },
  imagem: {
    width: 300, 
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center', 
  },
});