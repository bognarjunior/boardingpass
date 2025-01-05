import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/cover.png')} style={styles.header}>
      </ImageBackground>
    </View>
  )
}