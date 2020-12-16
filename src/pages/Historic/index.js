import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import * as  DateFns from 'date-fns';

import Loader from '../../components/Loader';
import EmptyList from '../../components/EmptyList';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoCondensed_400Regular,
} from '@expo-google-fonts/roboto-condensed';

export default function Historic() {
  const [historic, setHistoric] = useState([]);
  const [dateFilter, setDateFilter] = useState(() => onChangeNameDateState(new Date()))
  const [date, setDate] = useState(() => new Date())
  const [days, setDays] = useState(null);
  const [monthYear, setMonthYear] = useState(() => onChangeMonthYear(new Date()))
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function onChangeNameDateState (date) {
    const year = DateFns.getYear(date);
    const month = DateFns.getMonth(date);
    const monthTranslated = renderMonth(month)

    return `${monthTranslated} de ${year}`
  }

  function renderMonth(month){
    switch(month){
      case 0:
        return `Janeiro`
      case 1:
        return `Fevereiro`
      case 2: 
        return `Março`
      case 3:
        return `Abril`
      case 4: 
        return `Maio`
      case 5: 
        return `Junho`
      case 6: 
        return `Julho`
      case 7:
        return `Agosto`
      case 8:
        return `Setembro`
      case 9:
        return `Outubro`
      case 10: 
        return `Novembro`
      case 11:
        return `Dezembro`
    }    
  }

  // function getDaysofMonth (date) {
  //   const listOfDays = [];
  //   let firstDay = DateFns.startOfMonth(date);
  //   const daysInMonth = DateFns.getDaysInMonth(date);

  //   console.log(firstDay, daysInMonth)

  //   for(let i = 0; i < daysInMonth; i++){
  //     listOfDays.push(firstDay);

  //     firstDay = DateFns.addDays(firstDay, 1);
  //   }

  //   console.log(listOfDays)
    
  // }

  function onChangeMonthYear (date) {
    const month = `${DateFns.getMonth(date + 1)}`.padStart(2, '0');

    return `${month}.${DateFns.getYear(date)}`
  }

  const onChangeNameDate = (date) => {
    const year = DateFns.getYear(date);
    const month = DateFns.getMonth(date);
    const monthTranslated = renderMonth(month);

    setDateFilter(`${monthTranslated} de ${year}`)
  };

  function onChangeDate (date, action) {
    console.log(date)
    date = action === 'NEXT_MONTH' ? DateFns.addMonths(date, 1) : DateFns.subMonths(date, 1);

    const month = `${DateFns.getMonth(date) + 1}`.padStart(2, '0');
    const year = DateFns.getYear(date);
    const monthYear = `${month}.${year}`;

    setDate(date);
    setMonthYear(monthYear);

    onChangeNameDate(date)
  }

  useEffect(() => {
    setLoading(true);
    try {
      function getHistoric(userId) {
        setTimeout(() => {}, 2000);

        const data = [
          {
            id: 1,
            date: '2020-12-02',
            trainning: 'A',
          },
          {
            id: 2,
            date: '2020-12-03',
            trainning: 'B',
          },
          {
            id: 3,
            date: '2020-12-03',
            trainning: 'C',
          },
          {
            id: 4,
            date: '2020-12-04',
            trainning: 'A',
          },
          {
            id: 5,
            date: '2020-12-05',
            trainning: 'B',
          },
          {
            id: 6,
            date: '2020-12-08',
            trainning: 'C',
          },
          {
            id: 7,
            date: '2020-12-10',
            trainning: 'A',
          },
          {
            id: 8,
            date: '2020-12-11',
            trainning: 'B',
          },
          {
            id: 9,
            date: '2020-12-12',
            trainning: 'C',
          },
          {
            id: 10,
            date: '2020-12-13',
            trainning: 'A',
          },
          {
            id: 11,
            date: '2020-12-16',
            trainning: 'B',
          },
        ];
        return data.reverse();
      }

      setHistoric(getHistoric(1));
    } catch (err) {
      Alert.alert(
        'Falha na conexão',
        'Não foi possível carregar o seu treino.'
      );
    }
    setLoading(false);
  }, []);

  function handleNavigate(trainning) {
    console.log(trainning)
    navigation.navigate('HistoricDetail', { trainning })
  }

  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
    return (
      <>
        <Loader loading={loading} />
        <View style={styles.container}>
          <View style={styles.historicBg}>
            <Text style={styles.historicHeader} >Histórico de treinos</Text>
          </View>
          <View style={styles.header}>
            <Feather name='chevron-left' size={30} color='#3A362D' onPress={() => onChangeDate(date, 'LAST_MONTH')} />
            <Text style={styles.txtHeader}>{dateFilter}</Text>
            <Feather name='chevron-right' size={30} color='#3A362D' onPress={() => onChangeDate(date, 'NEXT_MONTH')}/>
          </View>
            <View style={styles.line} />

          {historic.length === 0 ? (
            <EmptyList />
          ) : (
            <FlatList
              data={historic}
              keyExtractor={(trainning) => String(trainning.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: trainning }) => (
                <>
                  <View style={styles.listCell}>
                    <Text style={styles.historicDay}>{DateFns.format(DateFns.parseISO(trainning.date), 'dd')}</Text>
                    <Text style={styles.listItem}>Treino {trainning.trainning}</Text>
                    <View></View>
                    <View></View>
                    <RectButton onPress={() => handleNavigate(trainning)}>
                      <Text>Ver mais</Text>
                    </RectButton>
                  </View>
                  <View style={styles.line} />
                </>
              )}
            />
          )}

        </View>
      </>
    );
  }
}
