import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as DateFns from 'date-fns'
import * as Locale  from 'date-fns/locale/pt-BR'
import Accordion from 'react-native-collapsible/Accordion';

import styles from './styles';

export default function HistoricDetail() {
  const [activeSections, setActiveSections] = useState([]);
  const SECTIONS = [
    {
      id: 1,
      title: 'Supino reto c/ halteres',
      content: {
        repetitions: 15,
        interval: 60,
        series: 4,
        load: 2,
        img: 'src/assets/sport.png',
      }
    },
    {
      id: 2,
      title: 'Supino incl. c/ barra',
      content: {
        repetitions: 15,
        interval: 60,
        series: 4,
        load: 3,
        img: 'src/assets/sport.png',
      }
    },
    {
      id: 3,
      title: 'Puxada supinada',
      content: {
        repetitions: 15,
        interval: 60,
        series: 4,
        load: 2,
        img: 'src/assets/sport.png',
      }
    },
    {
      id: 4,
      title: 'Remada c/ barra neutra',
      content: {
        repetitions: 15,
        interval: 60,
        series: 4,
        load: null,
        img: 'src/assets/sport.png',
      }
    },
    {
      id: 5,
      title: 'Voador',
      content: {
        repetitions: 15,
        interval: 60,
        series: 4,
        load: null,
        img: 'src/assets/sport.png',
      }
    },
    {
      id: 6,
      title: 'Tríceps na polia',
      content: {
        repetitions: 15,
        interval: 60,
        series: 4,
        load: null,
        img: 'src/assets/sport.png',
      }
    },
    {
      id: 7,
      title: 'Tríceps c/ corda',
      content: {
        repetitions: 15,
        interval: 60,
        series: 4,
        load: null,
        img: 'src/assets/sport.png',
      }
    },
  ];
  

  const navigation = useNavigation();
  const route = useRoute();

  const trainning = route.params.trainning;

  const renderHeader = section => {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.title}</Text>
          <Feather name={activeSections[0] === section.id - 1 ? 'chevron-up' : 'chevron-down'} size={20} color='#3A362D' onPress={() => navigation.goBack()} />
        </View>
        {!(activeSections[0] === section.id - 1) && <View style={styles.line} />}
      </>
    );
  };

  const renderContent = section => {
    return (
      <>
        <View style={styles.content}>
          <Text style={styles.contentTxt}>Repetições: {section.content.repetitions}</Text>
          <Text style={styles.contentTxt}>Intervalo: {section.content.interval}</Text>
          <Text style={styles.contentTxt}>Séries: {section.content.series}</Text>
          <Text style={styles.contentTxt}>Carga: {section.content.load}</Text>
        </View>
        {(activeSections[0] === section.id - 1) && <View style={styles.line} />}
      </>
    );
  };

  const updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.container}>
      <View style={styles.historicBg}>
        <Feather name='chevron-left' size={30} color='#3A362D' onPress={() => navigation.goBack()} />
        <Text style={styles.historicHeader} >Histórico de treinos</Text>
        <Feather name='' size={30} />
      </View>
      <View style={styles.dateHeader}>
        <Text style={styles.txtHeader}>{DateFns.format(DateFns.parseISO(trainning.date), 'dd/MM/yyyy')}</Text>
      </View>
      <View style={styles.line} />
      <ScrollView showsVerticalScrollIndicator={false} >
        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          // renderSectionTitle={(section) => renderSectionTitle(section)}
          renderHeader={(section) => renderHeader(section)}
          renderContent={(section) => renderContent(section)}
          onChange={(section) => updateSections(section)}
        />
      </ScrollView>
    </View>
  );
}
