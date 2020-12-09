import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import Loader from '../../components/Loader';
import EmptyList from '../../components/EmptyList';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoCondensed_400Regular,
} from '@expo-google-fonts/roboto-condensed';

export default function DailyTrainning() {
  const [dailyTrainning, setDailyTrainning] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    try {
      function getDailyTrainning(userId) {
        setTimeout(() => {}, 2000);

        const data = [
          {
            id: 1,
            description: 'Supino reto c/ halteres',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 2,
            description: 'Supino incl. c/ barra',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 3,
            description: 'Puxada supinada',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 4,
            description: 'Remada c/ barra neutra',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 5,
            description: 'Voador',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 6,
            description: 'Tríceps na polia',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
          {
            id: 7,
            description: 'Tríceps c/ corda',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: null,
            img: 'src/assets/sport.png',
          },
        ];
        return data;
      }

      setDailyTrainning(getDailyTrainning(1));
    } catch (err) {
      Alert.alert(
        'Falha na conexão',
        'Não foi possível carregar o seu treino.'
      );
    }
    setLoading(false);
  }, []);

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    console.log('lista', dailyTrainning);
    return (
      <>
        <Loader loading={loading} />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtHeader}>Seu treino hoje é:</Text>
            <View style={styles.line} />
          </View>

          {dailyTrainning.length === 0 ? (
            <EmptyList />
          ) : (
            <FlatList
              data={dailyTrainning}
              keyExtractor={(trainning) => String(trainning.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: trainning }) => (
                <>
                  <View style={styles.listCell}>
                    <Text style={styles.listItem}>{trainning.description}</Text>
                    {!trainning.load ? (
                      <MaterialIcons
                        name='add'
                        size={26}
                        color='#3A362D'
                        onPress={() =>
                          navigation.navigate('Exercício', { trainning })
                        }
                      />
                    ) : (
                      <MaterialIcons
                        name='check_circle_outline'
                        size={20}
                        color='#0B4455'
                      />
                    )}
                  </View>
                  <View style={styles.line} />
                </>
              )}
            />
          )}

          <RectButton style={styles.btn}>
            <Text style={styles.btnTxt}>CONCLUIR TREINO</Text>
          </RectButton>
        </View>
      </>
    );
  }
}
