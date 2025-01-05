import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'
import Flight from '@/components/fligth';
import { theme } from '@/theme';
import Details from '@/components/details';

const { colors } = theme;
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
            <Flight label="São Paulo" value="GRU" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} color={colors.Black} />
              <Text style={styles.hours}>9h 45m</Text>
            </View>
            <Flight label="New York" value="JFK" />
          </View>
          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>José Roberto Bognar Junior</Text>
          <View style={styles.details} >
            <Details label="Data" value="17 de Nov."/>
          </View>
        </View>
      </View>
    </View>
  )
}