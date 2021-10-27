import React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";


export function Routes() {
  const mainTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  const { user } = useAuth();

  return(
    <NavigationContainer theme={mainTheme} >
      { user.id ? <AppRoutes /> : <SignIn /> }
    </NavigationContainer>
  );
}