import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import Api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [user, token] = await AsyncStorage.multiGet([
        '@LadFit:user',
        '@LadFit:token',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async (email, password) => {
    setLoading(true);
    try {
      const response = await Api.post('/session', { email, password });
      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@LadFit:token', token],
        ['@LadFit:user', JSON.stringify(user)],
      ]);

      setData({ token, user });
    } catch (err) {
      Alert.alert('Falha na autenticação.', 'Verifique seus dados.');
    }
    setLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@LadFit:user', '@LadFit:token']);

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
