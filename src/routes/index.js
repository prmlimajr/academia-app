import React from 'react';

import Loader from '../components/Loader';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';
import Header from '../components/Header';

export default function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }
  return user ? (
    <>
      <Header />
      <AppRoutes />
    </>
  ) : (
    <AuthRoutes />
  );
}
