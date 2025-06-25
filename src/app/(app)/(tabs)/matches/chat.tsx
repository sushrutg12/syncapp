import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const mockUsers = {
  "1": {
    id: "1",
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  "2": {
    id: "2",
    name: "Jordan Chen",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  "3": {
    id: "3",
    name: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
};

const mockMessages = {
  "1": [
    {
      id: "m1",
      text: "Looking forward to discussing the opportunity!",
      sender: "them",
      timestamp: "Yesterday",
    },
    {
      id: "m2",
      text: "Great! Let me know your availability.",
      sender: "me",
      timestamp: "Yesterday",
    },
  ],
  "2": [
    {
      id: "m1",
      text: "Thanks for the offer! Let me review the details.",
      sender: "them",
      timestamp: "3 days ago",
    },
    {
      id: "m2",
      text: "Of course, take your time!",
      sender: "me",
      timestamp: "3 days ago",
    },
  ],
  "3": [
    {
      id: "m1",
      text: "Let's sync up next week.",
      sender: "them",
      timestamp: "5 days ago",
    },
    { id: "m2", text: "Sounds good!", sender: "me", timestamp: "5 days ago" },
  ],
};

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const user = mockUsers[id as keyof typeof mockUsers];
  const [messages, setMessages] = useState(
    mockMessages[id as keyof typeof mockMessages] || []
  );
  const [input, setInput] = useState("");
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Scroll to bottom on new message
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  if (!user) return null;

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `m${prev.length + 1}`,
        text: input,
        sender: "me",
        timestamp: "Now",
      },
    ]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginRight: 10 }}
        >
          <Text style={{ color: "#fff", fontSize: 22 }}>{"←"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(app)/(tabs)/standouts/profile",
              params: { id: user.id },
            })
          }
        >
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.username}>{user.name}</Text>
      </View>
      {/* Chat area */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              item.sender === "me" ? styles.bubbleMe : styles.bubbleThem,
            ]}
          >
            <Text
              style={[
                styles.bubbleText,
                item.sender === "me"
                  ? styles.bubbleTextMe
                  : styles.bubbleTextThem,
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      />
      {/* Input bar */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={80}
        style={styles.inputBarWrap}
      >
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor="#B0B4C0"
            value={input}
            onChangeText={setInput}
            multiline
          />
          <TouchableOpacity onPress={handleSend} disabled={!input.trim()}>
            <Text style={[styles.send, { opacity: input.trim() ? 1 : 0.5 }]}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#181A23" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#23243A",
    borderBottomWidth: 1,
    borderBottomColor: "#23243A",
  },
  avatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  username: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  bubble: { maxWidth: "75%", borderRadius: 16, marginBottom: 10, padding: 12 },
  bubbleMe: { alignSelf: "flex-end", backgroundColor: "#F4C087" },
  bubbleThem: { alignSelf: "flex-start", backgroundColor: "#23243A" },
  bubbleText: { fontSize: 15 },
  bubbleTextMe: { color: "#181A23" },
  bubbleTextThem: { color: "#fff" },
  inputBarWrap: { position: "absolute", left: 0, right: 0, bottom: 0 },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#23243A",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#23243A",
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#181A23",
    borderRadius: 8,
    marginRight: 10,
  },
  send: { color: "#F4C087", fontSize: 16, fontWeight: "bold" },
});
