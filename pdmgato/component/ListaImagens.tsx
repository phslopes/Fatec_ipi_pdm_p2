import {StyleSheet, View, Pressable, Text } from 'react-native';
import theCatApiClient from '../utils/theCatApiClient';
import React from 'react';

export default function ListaImagens({ setImagens }: { setImagens: (imagens: string[]) => void }) {
  const carregarImagens = async () => {
      const response = await theCatApiClient.get('search', { params: { limit: 5 } }); 
			const novasImagens = response.data.slice(0, 5).map((item: any) => item.url);
      setImagens(novasImagens);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={carregarImagens}>
        <Text style={styles.buttonText}>Gerar imagens</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:   {
    backgroundColor: '#4e7df2',
    padding: 12,
    borderRadius: 24,
    margin: 12,
  },
  buttonText:   {
    color: 'white',
    textAlign: 'center',
  },
});