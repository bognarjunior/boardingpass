import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import QRCode from 'react-native-qrcode-svg'; 
import Svg, { Circle, Line } from 'react-native-svg';

import { styles } from './styles';
import { theme } from '@/theme';

import Flight from '@/components/fligth';
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
            <View style={styles.inline}>
              <Details label="Data" value="17 de Nov."/>
              <Details label="Embarque" value="17:25"/>
            </View>
          </View>
        </View>

        <View>
          <Svg width="100%" height={20}>
            <Line 
              x1="0%" 
              y1="50%" 
              x2="100%" 
              y2="50%"
              stroke={colors.Gray[400]} 
              strokeWidth={1} 
              strokeDasharray={"5,5"}
            />
            <Circle cx="0%" cy="50%" r="8" fill={colors.Black} />
            <Circle cx="100%" cy="50%" r="8" fill={colors.Black} />
          </Svg>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Details label="Voo" value="YT 123"/>
              <Details label="Assento" value="29G"/>
            </View>
            <View style={styles.inline}>
              <Details label="Terminal" value="13"/>
              <Details label="Portão" value="17"/>
            </View>
          </View>

          <QRCode 
            value="https://www.google.com.br"
            size={150}
            backgroundColor={colors.White}
            color={colors.Black}
          />
        </View>
      </View>
    </View>
  )
}