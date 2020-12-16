import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as DateFns from 'date-fns';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

import FocusAwareStatusBar from '../../hooks/statusBar';
import ProfileBG from '../../assets/profile.png';
import ProfilePic from '../../assets/profilepic.jpeg';

import styles from './styles';

import { useAuth } from '../../hooks/auth';

export default function Profile() {
  
  const { user } = useAuth();

  const { signIn } = useAuth();

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });
  
  function handleNavigateToWeightControl() {
    navigation.navigate('Controle de peso')
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground source={ProfileBG} style={styles.bcg}>
        <FocusAwareStatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent={true}
        />
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Image source={ProfilePic} style={styles.profilePic} />
            <Feather name="camera" size={12} color='#FFF' />
          </View>
          <View>
            <Text style={styles.profileName}>{user.name} Lima</Text>
            <Text style={styles.bio}>
              {/* {DateFns.differenceInYears(new Date(), user.birthday)} anos, */}
              35 anos, 1,78cm, 100Kg
            </Text>
            <Text style={styles.memberSince}>Membro desde: 15/04/2020</Text>
          </View>
          <Feather name='edit-2' size={20} color='#FFF' onPress={() => {}} />
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyTxt}>Seus treinos:</Text>
          <View style={styles.fakeInputs}>
            <Text style={styles.fakeInputsTxt}>A</Text>
            <Text style={styles.fakeInputsTxt}>Peitos, Ombros e Tríceps</Text>
          </View>
          <View style={styles.fakeInputs}>
            <Text style={styles.fakeInputsTxt}>B</Text>
            <Text style={styles.fakeInputsTxt}>Bíceps, Abdômen</Text>
          </View>
          <View style={styles.fakeInputs}>
            <Text style={styles.fakeInputsTxt}>C</Text>
            <Text style={styles.fakeInputsTxt}>Pernas</Text>
          </View>
          <Text style={styles.bodyTxt}>Seu instrutor: Felipe Monteiro</Text>
            <Text style={styles.bodyTxt}>Data da prescrição do último treino: 30/07/2020</Text>

            <Text style={styles.weight}>Seu peso:</Text>
            <View style={styles.fakeInputsWeight}>
              <View style={styles.leftSide}>
              <Feather style={styles.scale} name='archive' size={20} color='#FFF' onPress={() => {}} />
                <Text style={styles.fakeInputsTxt}>100Kg</Text>
              </View>
              <View style={styles.rightSide}>
                <Text style={styles.date}>30/07/2020</Text>
                <Feather name='edit-2' size={20} color='#FFF' onPress={() => handleNavigateToWeightControl()} />
              </View>
            </View>

            <Text style={styles.weight}>Data do próximo pagamento:</Text>
            <View style={styles.fakeInputs}>
              <Feather style={styles.credit} name='credit-card' size={20} color='#FFF' />
              <Text style={styles.fakeInputsTxt}>30/07/2020</Text>
            </View>
        </View>
      </ImageBackground>
    );
  }
}
