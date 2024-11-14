import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';
import { HomeScreen, SplashScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const NavigationProvider: React.FC = () => {
  return <NavigationStack />;
};

export default NavigationProvider;
