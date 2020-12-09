import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoCondensed_400Regular,
} from '@expo-google-fonts/roboto-condensed';

import Dumbbell from '../../assets/dumbbell.png';
import styles from './styles';

export default function Dashboard() {
  const navigation = useNavigation();

  function handleStart() {
    console.log(
      'Aqui vai a lógica de iniciar o treino do dia, enviando o horário para o banco de dados. Após iniciar o treino o usuário não pode voltar para esta tela.'
    );
    navigation.navigate('Treino do dia');
  }

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={Dumbbell} style={styles.bcg}>
          <View style={styles.body}>
            <RectButton style={styles.startBtn} onPress={() => handleStart()}>
              <Text style={styles.btnText}>INICIAR TREINO</Text>
            </RectButton>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
