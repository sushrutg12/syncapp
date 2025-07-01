import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image as LucideImage,
  MoveHorizontal as MoreHorizontal,
  Paperclip,
  Send,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Mock messages
const MOCK_MESSAGES = [
  { id: "1", sender: "me", text: "Hey there!" },
  { id: "2", sender: "them", text: "Hi! Excited to connect." },
  { id: "3", sender: "me", text: "Looking forward to chatting more." },
  { id: "4", sender: "them", text: "Me too!" },
];

// Demo avatars for mockup
const AVATAR_MAP: Record<string, string> = {
  "Jessica Chen":
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
  "Alexander Rodriguez":
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  "Priya Sharma":
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  "Marcus Johnson":
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
  "Sarah Kim":
    "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
};

export default function MessageScreen() {
  const { id, name } = useLocalSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("");

  // For demo, just use the name param if available, otherwise fallback to id
  const connectionName =
    typeof name === "string" && name ? name : `Connection ${id}`;
  const avatar = AVATAR_MAP[connectionName] || undefined;

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#000000", "#1a1a1a", "#2a2a2a"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text
              style={{ fontSize: 24, color: "#FFA46A", fontWeight: "bold" }}
            >
              {"‹"}
            </Text>
          </TouchableOpacity>
          {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
          <Text style={styles.headerName} numberOfLines={1}>
            {connectionName}
          </Text>
          <TouchableOpacity style={styles.moreButton}>
            <MoreHorizontal size={24} color="#FFA46A" />
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <FlatList
          data={MOCK_MESSAGES}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
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
        />

        {/* Message Input Bar */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={80}
          style={styles.inputBarWrapper}
        >
          <View style={styles.inputBar}>
            <TouchableOpacity style={styles.inputIcon}>
              <Paperclip size={22} color="#FFA46A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputIcon}>
              <LucideImage size={22} color="#FFA46A" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Message..."
              placeholderTextColor="#B0B4C0"
              value={message}
              onChangeText={setMessage}
              multiline
              maxLength={500}
            />
            <TouchableOpacity
              style={styles.sendButton}
              disabled={message.trim().length === 0}
            >
              <LinearGradient
                colors={["#FFA46A", "#FA6739"]}
                style={styles.sendGradient}
              >
                <Send
                  size={22}
                  color={message.trim().length === 0 ? "#ccc" : "#000"}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 16 : 8,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
    zIndex: 10,
  },
  backButton: {
    marginRight: 8,
    padding: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#FFA46A",
    marginRight: 10,
  },
  headerName: {
    flex: 1,
    fontSize: 20,
    fontFamily: "poppins-semibold",
    color: "#FFA46A",
    fontWeight: "600",
    letterSpacing: 0.5,
    marginRight: 8,
  },
  moreButton: {
    padding: 4,
  },
  bubble: {
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 12,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  bubbleMe: {
    alignSelf: "flex-end",
    backgroundColor: "#FFA46A",
  },
  bubbleThem: {
    alignSelf: "flex-start",
    backgroundColor: "#23243A",
  },
  bubbleText: {
    fontSize: 16,
    fontFamily: "poppins-regular",
    lineHeight: 22,
  },
  bubbleTextMe: {
    color: "#1a1a1a",
    fontWeight: "500",
  },
  bubbleTextThem: {
    color: "#fff",
    fontWeight: "400",
  },
  inputBarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    paddingBottom: Platform.OS === "ios" ? 24 : 12,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(36,36,36,0.95)",
    borderRadius: 32,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontFamily: "poppins-regular",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "transparent",
    minHeight: 36,
    maxHeight: 80,
  },
  inputIcon: {
    padding: 6,
    marginRight: 2,
  },
  sendButton: {
    marginLeft: 6,
    borderRadius: 20,
    overflow: "hidden",
  },
  sendGradient: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
