import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
// import * as DateFNS from 'date-fns';
import { Feather } from '@expo/vector-icons';

import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

import { AppLoading } from 'expo';

import ProfileBG from '../../assets/profile.png';

import styles from './styles';

import { useAuth } from '../../hooks/auth';

import ProfilePic from '../../assets/profilepic.jpeg';

export default function Profile() {
  const { user } = useAuth();

  const { signIn } = useAuth();

  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground source={ProfileBG} style={(styles.bcg, { flex: 1 })}>
        <View style={styles.header}>
          <Image
            source={ProfilePic}
            style={
              (styles.profilePic, { width: 50, height: 50, borderRadius: 50 })
            }
          />
          <View style={styles.profileData}>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.bio}>
              {/* {DateFNS.differenceInYears(user.birthday, new Date())} anos, */}
              35 anos, 1,78cm, 100Kg
            </Text>
          </View>
          <Feather name='edit-2' size={30} color='#FFF' onPress={() => {}} />
        </View>
      </ImageBackground>
    );
  }
}
