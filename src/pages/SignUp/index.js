import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Alert,
  ScrollView,
} from 'react-native';

import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

import { RectButton } from 'react-native-gesture-handler';

import Loader from '../../components/Loader';

import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import SignInImg from '../../assets/homebg.png';

import Api from '../../services/api';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  const handleSignUp = useCallback(
    async (firstName, lastName, email, password, confirmPassword) => {
      setLoading(true);
      try {
        const signUp = await Api.post('/users', {
          name: firstName,
          lastName,
          email,
          password,
          confirmPassword,
        });

        Alert.alert(
          'Cadastro realizado com sucesso.',
          'Você já pode fazer o login.'
        );
        navigation.navigate('Entrar');
      } catch (err) {
        Alert.alert(
          'Não foi possível efetuar o cadastro',
          'Verifique seus dados.'
        );
      }
      setLoading(false);
    },
    [navigation]
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          <Loader loading={loading} />
          <ImageBackground source={SignInImg} style={styles.bcg}>
            <View style={styles.body}>
              <Text style={styles.signInTxt}>Faça o seu cadastro:</Text>

              <TextInput
                style={styles.signInInput}
                onChangeText={(e) => setFirstName(e)}
                value={firstName}
                placeholder='Nome'
                returnKeyType='next'
              />

              <TextInput
                style={styles.signInInput}
                onChangeText={(e) => setLastName(e)}
                value={lastName}
                placeholder='Sobrenome'
                returnKeyType='next'
              />

              <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                style={styles.signInInput}
                onChangeText={(e) => setEmail(e)}
                value={email}
                placeholder='E-mail'
                returnKeyType='next'
              />

              <TextInput
                style={styles.signInInput}
                onChangeText={(e) => setPassword(e)}
                value={password}
                secureTextEntry={true}
                placeholder='Senha'
                returnKeyType='next'
              />

              <TextInput
                style={styles.signInInput}
                onChangeText={(e) => setConfirmPassword(e)}
                value={confirmPassword}
                secureTextEntry={true}
                placeholder='Confirmar senha'
                returnKeyType='send'
                onSubmitEditing={() =>
                  handleSignUp(
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                  )
                }
              />

              <RectButton
                style={styles.signInBtn}
                onPress={() =>
                  handleSignUp(
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                  )
                }
              >
                <Text style={styles.boldTxt}>CADASTRAR</Text>
              </RectButton>

              <View style={styles.yellowLine}></View>
              <Text style={styles.signInTxt}>Já tem sua conta?</Text>
              <Text
                style={styles.signInTxt}
                onPress={() => navigation.goBack()}
              >
                Acesse o app aqui!
              </Text>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
