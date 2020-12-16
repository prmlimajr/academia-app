import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as  DateFns from 'date-fns';

import Loader from '../../../components/Loader';

import { useNavigation } from '@react-navigation/native';

import WeightChart from './WeightChart';

import ProfileBG from '../../../assets/profile.png';
import styles from './styles'
import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoCondensed_400Regular,
} from '@expo-google-fonts/roboto-condensed';
import DatePicker from 'react-native-datepicker'
import { RectButton, TextInput } from 'react-native-gesture-handler';

export default function WeightControl() {
  const [weight, setWeight] = useState(null);
  const [historic, setHistoric] = useState([]);
  const [dateFilter, setDateFilter] = useState(() => onChangeNameDateState(new Date()));
  const [date, setDate] = useState(() => new Date());
  const [datePicker, setDatePicker] = useState(() => new Date());
  const [monthYear, setMonthYear] = useState(() => onChangeMonthYear(new Date()));
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
            description: 'Supino reto c/ halteres',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: 2,
            img: 'src/assets/sport.png',
          },
          {
            id: 2,
            description: 'Supino incl. c/ barra',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: 3,
            img: 'src/assets/sport.png',
          },
          {
            id: 3,
            description: 'Puxada supinada',
            repetitions: 15,
            interval: 60,
            series: 4,
            load: 2,
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

      setHistoric(getHistoric(1));
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
  return (  
    <ImageBackground source={ProfileBG} style={styles.bcg}>
      <Loader loading={loading} />
      <View style={styles.historicBg}>
        <Feather name='arrow-left' size={20} color='#FFF' onPress={() => navigation.goBack()} />
        <Text style={styles.historicHeader} >Histórico de peso</Text>
        <Feather name='' size={20} color='#FFF' />
      </View>
      <View style={styles.header}>
        <Feather name='chevron-left' size={30} color='#FFF' onPress={() => onChangeDate(date, 'LAST_MONTH')} />
        <Text style={styles.txtHeader}>{dateFilter}</Text>
        <Feather name='chevron-right' size={30} color='#FFF' onPress={() => onChangeDate(date, 'NEXT_MONTH')}/>
      </View>
      <WeightChart />
      
        <View style={styles.fakeInput}>
          <DatePicker
            style={styles.datePicker}
            date={datePicker}
            mode="date"
            placeholder="Escolha a data"
            format="YYYY-MM-DD"
            minDate="2000-01-01"
            maxDate={new Date()}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            showIcon={true}
            onDateChange={(date) => {setDatePicker(date)}}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setWeight(e)}
            value={weight}
            placeholder='--'
            keyboardType='numeric'
          />
          <Text style={styles.txt}>Kg</Text>
        </View>

        <RectButton style={styles.addBtn}>
          <Text style={styles.btnTxt}>ADICIONAR</Text>
        </RectButton>
       
    </ImageBackground>
    
    )
  }
}
