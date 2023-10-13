import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
import React from 'react';
import Login from '../src/Screens/Login';
import Checkin from '../src/Screens/Checkin';
import Home from '../src/Screens/Home';

export default function Stacknavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}
         options={{headerShown: false}} />
            <Stack.Screen name="home"
         options={{headerShown: false}} component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
