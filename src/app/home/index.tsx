import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/cover.png')} style={styles.header}>
      <Text style={styles.title}>Cartão de embarque</Text>
      <Text style={styles.subtitle}>Faltam 45 dias para tua viagem</Text>
      </ImageBackground>
      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
          
          </View>
        </View>
      </View>
    </View>
  )
}