import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import ListaImagens from './component/ListaImagens';
export default function App() {

  return (
    <View style={styles.container}>
      <ListaImagens/>
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
});