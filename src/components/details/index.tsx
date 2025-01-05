import { View, Text } from 'react-native'
import React from 'react';
import { styles } from './styles';
type Props = {
  label: string,
  value: string
}

export default function Details({label, value}: Props) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}