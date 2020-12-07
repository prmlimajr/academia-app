import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import LadSoft from '../../assets/ladsoft.png';

import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

import { useAuth } from '../../hooks/auth';

import styles from './styles.js';
import { RectButton } from 'react-native-gesture-handler';

export default function Header() {
  const { user, signOut } = useAuth();

  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.header}>
        <Image source={LadSoft} style={styles.ladsoftHeader} />
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Bem vindo, {user.name}</Text>
          <RectButton style={styles.exit} onPress={() => signOut()}>
            <Text style={styles.logout}>Sair</Text>
            <MaterialIcons name='logout' size={22} color='#3A362D' />
          </RectButton>
        </View>
      </View>
    );
  }
}
