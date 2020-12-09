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

  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

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
          <Image source={ProfilePic} style={styles.profilePic} />
          <View>
            <Text style={styles.profileName}>{user.name} Lima</Text>
            <Text style={styles.bio}>
              {/* {DateFNS.differenceInYears(user.birthday, new Date())} anos, */}
              35 anos, 1,78cm, 100Kg
            </Text>
            <Text style={styles.memberSince}>Membro desde: 15/04/2020</Text>
          </View>
          <Feather name='edit-2' size={20} color='#FFF' onPress={() => {}} />
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyTxt}>Seus treinos:</Text>
        </View>
      </ImageBackground>
    );
  }
}
