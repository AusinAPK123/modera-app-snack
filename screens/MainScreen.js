import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainScreen({ navigation }) {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('userId').then(setUserId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xin chào!</Text>
      <Text style={styles.subtitle}>ID: {userId}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChatList')}
      >
        <Text style={styles.buttonText}>Nhắn tin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Setting')}
      >
        <Text style={styles.buttonText}>Cài đặt</Text>
      </TouchableOpacity>

      {userId === '3a080b01-ff4c-45ae-9b8f-fd21187cf071' && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AdminPanel')}
        >
          <Text style={styles.buttonText}>Admin Panel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    color: 'white',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 10
  },
  buttonText: {
    color: '#3e3e3e',
    fontWeight: 'bold',
    fontSize: 16
  }
});
