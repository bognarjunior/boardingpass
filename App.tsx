import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold, 
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';
import Home from '@/app/home';
import React from 'react';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold, 
    Poppins_800ExtraBold
  })
  if(!fontsLoaded){
    return null
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Home />
    </>
  );
}

