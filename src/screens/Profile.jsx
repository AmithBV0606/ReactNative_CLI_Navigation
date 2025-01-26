import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
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
        Profile
      </Text>

      <Button title="Search" onPress={() => navigation.navigate('Search')} />

      {/* <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>
        Id :{id}, Name : {name}
      </Text> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
