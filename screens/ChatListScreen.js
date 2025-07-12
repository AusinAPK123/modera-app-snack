import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const users = [
  { id: 'ed93a2d7-7a29-4b86-aaee-213ab7638122', name: 'Hưng' },
  { id: '70df2c2c-b5a4-4303-91f6-93ae8c5c01ec', name: 'Thành' },
  { id: '39e75b8a-6697-480c-ba9c-ddb5d8b4ebeb', name: 'Việt' },
  { id: '41f4ff40-d356-478d-9465-15fbecc28ac4', name: 'Dương' },
  { id: '3a080b01-ff4c-45ae-9b8f-fd21187cf071', name: 'Cường' },
];

export default function ChatListScreen({ navigation }) {
  const [search, setSearch] = React.useState('');

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="🔍 Tìm kiếm người dùng"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.user}
            onPress={() => navigation.navigate('Chat', { user: item })}>
            <Text style={styles.userText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  search: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 12
  },
  user: {
    padding: 16,
    backgroundColor: '#3e3e3e',
    borderRadius: 10,
    marginBottom: 10
  },
  userText: {
    color: 'white',
    fontSize: 16
  }
});
