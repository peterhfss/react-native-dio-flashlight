import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home/index';
import Flashlight from './src/screens/Flashlight';

const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#7FB3D5'
        },
        headerTintColor: '#FFFFFF',
       }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Flashlight' component={Flashlight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
