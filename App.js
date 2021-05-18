import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/screens/Home/Home"
import Splash from "./src/screens/Splash/Splash"
import Details from "./src/screens/Home/Components/DetailsScreen"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{headerShown: false}} 
          name="Splash" 
          component={Splash} 
        />
        <Stack.Screen 
          options={{headerShown: false}} 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          options={{headerShown: false}} 
          name="Details" 
          component={Details} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
