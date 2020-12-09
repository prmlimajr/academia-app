import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, ImageBackground, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

import Sports from '../../../assets/sport.png';

import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoCondensed_400Regular,
} from '@expo-google-fonts/roboto-condensed';

export default function TrainningDetail() {
  const [load, setLoad] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  const trainning = route.params.trainning;

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.line} />
          </View>

          <View style={styles.title}>
            <Feather
              name='chevron-left'
              size={30}
              color='#3A362D'
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.titleTxt}>{trainning.description}</Text>
            <View style={{ width: 20 }}></View>
          </View>
        </View>

        <ImageBackground source={Sports} style={styles.img} />

        <View style={styles.containerBottom}>
          <View style={styles.data}>
            <Text style={styles.dataTxt}>Séries: {trainning.series}</Text>
            <Text style={styles.dataTxt}>
              Repetições: {trainning.repetitions}
            </Text>
            <Text style={styles.dataTxt}>
              Intervalo: {trainning.interval} segundos
            </Text>
            <View style={styles.row}>
              <Text style={styles.dataTxt}>Carga executada:</Text>
              <TextInput
                style={styles.dataInput}
                keyboardType='numeric'
                onChangeText={(e) => setLoad(e)}
                value={load}
              />
            </View>
          </View>

          <RectButton style={styles.btn}>
            <Text style={styles.btnTxt}>ENVIAR</Text>
          </RectButton>
        </View>
      </>
    );
  }
}
