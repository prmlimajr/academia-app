import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoCondensed_400Regular,
} from '@expo-google-fonts/roboto-condensed';

export default function EmptyList() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialIcons name='error' size={42} color='#3A362D' />
        <Text
          style={{
            color: '#3A362D',
            fontFamily: 'RobotoCondensed_400Regular',
            fontSize: 20,
          }}
        >
          Ooops...
        </Text>
        <Text
          style={{
            color: '#3A362D',
            fontFamily: 'RobotoCondensed_400Regular',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          Parece que não há nenhum treino cadastrado para você.
        </Text>
      </View>
    );
  }
}
