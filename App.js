import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/screens/MainScreen';
import OtherScreen from './src/screens/OtherScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
        screenOptions={{
        tabBarActiveTintColor: '#A89AF0',
        tabBarInactiveTintColor: '#434764',
        tabBarShowLabel: false
      }}>
      <Tab.Screen name="Main" 
                  component={MainScreen} 
                  options={{
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="card-bulleted-outline" color={focused ? '#A89AF0' : '#434764'} size={focused ? 44 : 32} />
                  ),}}/>
      <Tab.Screen name="Support Me!" 
                  component={OtherScreen} 
                  options={{
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <MaterialCommunityIcons name="animation" color={focused ? '#A89AF0' : '#434764'} size={focused ? 40 : 30} />
                  ),}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;