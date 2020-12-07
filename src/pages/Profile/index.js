import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Text>Profile</Text>
      <RectButton
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'red',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => signOut()}
      >
        <Text>SAIR</Text>
      </RectButton>
    </View>
  );
}
