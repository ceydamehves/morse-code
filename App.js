import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/screens/MainScreen';
import OtherScreen from './src/screens/OtherScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Other" component={OtherScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;