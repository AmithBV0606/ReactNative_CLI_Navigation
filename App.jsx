import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return(
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: "red",
      tabBarLabelStyle: {
        fontSize: 15
      },
      tabBarStyle: {
        height: 60
      }
    }}>
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={'home'} size={22} color={color} />
          )
        }}
      />
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})