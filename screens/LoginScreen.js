import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState('');

  const handleLogin = async () => {
    if (!userId.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập ID!');
      return;
    }
    await AsyncStorage.setItem('userId', userId);
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modera Studio</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập ID của bạn"
        value={userId}
        onChangeText={setUserId}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30
  },
  input: {
    width: '100%',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12
  },
  buttonText: {
    color: '#3e3e3e',
    fontWeight: 'bold',
    fontSize: 16
  }
});
