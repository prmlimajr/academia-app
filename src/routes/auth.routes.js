import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';

export default function AuthRoutes() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name='Entrar' component={SignIn} />
      <Auth.Screen name='Cadastro' component={SignUp} />
      <Auth.Screen name='EsqueciSenha' component={ResetPassword} />
    </Auth.Navigator>
  );
}
