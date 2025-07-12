import React, { useState } from 'react'; import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function ChatScreen({ route, navigation }) { const { user } = route.params; const [messages, setMessages] = useState([]); const [text, setText] = useState('');

const sendMessage = () => { if (!text.trim()) return; setMessages([...messages, { text, sender: 'me' }]); setText(''); };

return ( <View style={styles.container}> <View style={styles.header}> <TouchableOpacity onPress={() => navigation.goBack()}> <Text style={styles.back}>{'<'}</Text> </TouchableOpacity> <Text style={styles.name}>{user.name}</Text> </View>

<FlatList
    style={styles.messages}
    data={messages}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <View style={[styles.bubble, item.sender === 'me' ? styles.myBubble : styles.theirBubble]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    )}
  />

  <View style={styles.inputRow}>
    <TextInput
      style={styles.input}
      placeholder="Nhắn tin..."
      value={text}
      onChangeText={setText}
    />
    <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
      <Text style={styles.sendText}>Gửi</Text>
    </TouchableOpacity>
  </View>
</View>

); }

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff' }, header: { height: 50, backgroundColor: '#3e3e3e', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }, back: { color: 'white', fontSize: 22 }, name: { color: 'white', fontSize: 18, marginLeft: 12 }, messages: { flex: 1, padding: 10 }, bubble: { padding: 12, borderRadius: 10, marginBottom: 8, maxWidth: '80%' }, myBubble: { backgroundColor: '#3e3e3e', alignSelf: 'flex-end' }, theirBubble: { backgroundColor: '#ddd', alignSelf: 'flex-start' }, messageText: { color: '#000' }, inputRow: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: '#ccc' }, input: { flex: 1, backgroundColor: '#eee', borderRadius: 10, paddingHorizontal: 10, height: 40 }, sendButton: { backgroundColor: '#3e3e3e', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16, borderRadius: 10, marginLeft: 8 }, sendText: { color: 'white' } });

  
