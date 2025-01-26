import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home.jsx';
import Search from './src/screens/Search.jsx';
import Profile from './src/screens/Profile.jsx';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        headerStyle: {
          backgroundColor:"yellow"
        }
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: "Home Screen", headerStyle:{ backgroundColor: "#177E89" } }}
      />

      <Stack.Screen 
        name="Profile" 
        component={Profile} 
      />

      <Stack.Screen 
        name="Search" 
        component={Search} 
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
