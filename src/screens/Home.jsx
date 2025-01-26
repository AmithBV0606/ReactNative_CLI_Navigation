import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
      }}>
      <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>
        Home
      </Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      {/* <Button title="Profile" onPress={() => navigation.push('Profile', { id: 1, name: "Amith"})} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
