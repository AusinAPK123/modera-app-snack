import React, { useState } from 'react'; import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function ChatScreen({ route }) { const { user } = route.params; const [messages, setMessages] = useState([]); const [input, setInput] = useState('');

const sendMessage = () => { if (!input.trim()) return; setMessages([...messages, { text: input, sender: 'me' }]); setInput(''); };

return ( <View style={styles.container}> <Text style={styles.header}>{user.name}</Text> <FlatList style={styles.chatBox} data={messages} keyExtractor={(_, i) => i.toString

  
