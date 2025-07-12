import React, { useEffect, useState } from 'react'; import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'; import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingScreen({ navigation }) { const [userId, setUserId] = useState('');

useEffect(() => { AsyncStorage.getItem('userId').then(setUserId); }, []);

const handleLogout = async () => { await AsyncStorage.removeItem('userId'); navigation.replace('Login'); };

return ( <View style={styles.container}> <View style={styles.header}> <TouchableOpacity onPress={() => navigation.goBack()}> <Text style={styles.back}>{'<'}</Text> </TouchableOpacity> <Text style={styles.title}>Cài đặt</Text> </View>

<View style={styles.content}>
    <TouchableOpacity style={styles.avatarButton}>
      <Image
        source={require('../assets/avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.changeText}>Thay đổi avatar</Text>
    </TouchableOpacity>

    <Text style={styles.label}>ID của bạn:</Text>
    <Text style={styles.id}>{userId}</Text>

    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.logoutText}>Đăng xuất</Text>
    </TouchableOpacity>
  </View>
</View>

); }

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff' }, header: { height: 50, backgroundColor: '#3e3e3e', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }, back: { color: 'white', fontSize: 22 }, title: { color: 'white', fontSize: 18, marginLeft: 12 }, content: { padding: 20 }, avatarButton: { alignItems: 'center', marginBottom: 20 }, avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' }, changeText: { color: '#3e3e3e', marginTop: 8 }, label: { marginTop: 20, fontWeight: 'bold' }, id: { color: '#3e3e3e', marginBottom: 30 }, logoutButton: { backgroundColor: '#f44336', padding: 12, borderRadius: 10, alignItems: 'center' }, logoutText: { color: 'white', fontWeight: 'bold' } });

