import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { RootStackParamList } from './RootStackParams';
import { theme } from '../global/styles/theme';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return(
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
        headerShown: false,
      }}
    >

      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />

      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
      


    </Navigator>
  );
}