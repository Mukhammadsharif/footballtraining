import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './screens/onboarding';
import Main from './screens/main';
import Day from './screens/day';
import Detail from './screens/detail';
import Puzzle from './screens/puzzle';

export default function App() {
  return (
    <>
      <StatusBar />
      <Navigator />
    </>
  );
}

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Onboarding} name="Onboarding" />
        <Stack.Screen component={Main} name="Main" />
        <Stack.Screen component={Day} name="Day" />
        <Stack.Screen component={Detail} name="Detail" />
        <Stack.Screen component={Puzzle} name="Puzzle" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
