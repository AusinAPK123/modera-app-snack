import React, { useState, useEffect } from 'react'; import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native'; import AsyncStorage from '@react-native-async-storage/async-storage';

const ADMIN_ID = '3a080b01-ff4c-45ae-9b8f-fd21187cf071';

export default function AdminPanelScreen({ navigation }) { const [accounts, setAccounts] = useState([ { name: 'Hưng', id: 'ed93a2d7-7a29-4b86-aaee-213ab7638122' }, { name: 'Cường', id: ADMIN_ID }, ]); const [userId, setUserId] = useState(null); const [name, setName] = useState(''); const [id, setId] = useState('');

useEffect(() => { AsyncStorage.getItem('userId').then(setUserId); }, []);

const addAccount = () => { if (!name.trim() || !id.trim()) { Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ tên và ID.'); return; } if (accounts.some(acc => acc.id === id)) { Alert.alert('Lỗi', 'ID đã tồn tại.'); return; } setAccounts([...accounts, { name, id }]); setName(''); setId(''); };

const deleteAccount = (targetId) => { if (targetId === ADMIN_ID) { Alert.alert('Không thể xoá tài khoản admin.'); return; } setAccounts(accounts.filter(acc => acc.id !== targetId)); };

const editAccount = (targetId) => { const newName = prompt('Nhập tên mới:'); if (newName) { setAccounts(accounts.map(acc => acc.id === targetId ? { ...acc, name: newName } : acc)); } };

if (userId !== ADMIN_ID) { return ( <View style={styles.container}> <Text style={styles.forbidden}>Chức năng này chỉ dành cho admin.</Text> <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}> <Text style={styles.backText}>{'<'} Quay lại</Text> </TouchableOpacity> </View> ); }

return ( <View style={styles.container}> <View style={styles.header}> <TouchableOpacity onPress={() => navigation.goBack()}> <Text style={styles.back}>{'<'}</Text> </TouchableOpacity> <Text style={styles.title}>Admin Panel</Text> </View>

<View style={styles.form}>
    <TextInput
      placeholder="Tên tài khoản mới"
      value={name}
      onChangeText={setName}
      style={styles.input}
    />
    <TextInput
      placeholder="ID tài khoản"
      value={id}
      onChangeText={setId}
      style={styles.input}
    />
    <TouchableOpacity onPress={addAccount} style={styles.addButton}>
      <Text style={styles.addText}>Tạo tài khoản</Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={accounts}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <View style={styles.accountItem}>
        <View>
          <Text style={styles.accountText}>Tên: {item.name}</Text>
          <Text style={styles.accountText}>ID: {item.id}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => editAccount(item.id)}
            style={styles.editButton}
          >
            <Text style={styles.actionText}>Đổi tên</Text>
          </TouchableOpacity>
          {item.id !== ADMIN_ID && (
            <TouchableOpacity
              onPress={() => deleteAccount(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.actionText}>Xoá</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )}
  />
</View>

); }

const styles = StyleSheet.create({ container: { flex: 1, padding: 16, backgroundColor: '#fff' }, forbidden: { fontSize: 18, textAlign: 'center', marginTop: 60 }, backButton: { marginTop: 20, alignItems: 'center' }, backText: { color: '#3e3e3e' }, header: { height: 50, backgroundColor: '#3e3e3e', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 16 }, back: { color: 'white', fontSize: 22 }, title: { color: 'white', fontSize: 18, marginLeft: 12 }, form: { marginBottom: 20 }, input: { backgroundColor: '#eee', padding: 12, borderRadius: 10, marginBottom: 10 }, addButton: { backgroundColor: '#3e3e3e', padding: 12, borderRadius: 10, alignItems: 'center' }, addText: { color: 'white', fontWeight: 'bold' }, accountItem: { backgroundColor: '#f4f4f4', borderRadius: 10, padding: 12, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between' }, accountText: { color: '#000' }, actions: { flexDirection: 'row' }, editButton: { backgroundColor: '#3e3e3e', padding: 8, borderRadius: 6, marginRight: 8 }, deleteButton: { backgroundColor: '#f44336', padding: 8, borderRadius: 6 }, actionText: { color: 'white', fontSize: 12 } });

  
