import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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

export default function MessageScreen() {
  const { id, name } = useLocalSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("");

  // For demo, just use the name param if available, otherwise fallback to id
  const connectionName =
    typeof name === "string" && name ? name : `Connection ${id}`;

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      {/* Header */}
      <View className="flex-row items-center p-4 border-b border-gray-800">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#ecac6d" />
        </TouchableOpacity>
        <Text className="text-xl font-poppins-semibold text-white flex-1">
          {connectionName}
        </Text>
      </View>

      {/* Messages */}
      <FlatList
        data={MOCK_MESSAGES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.sender === "me" ? "flex-end" : "flex-start",
              backgroundColor: item.sender === "me" ? "#ecac6d" : "#374151",
              borderRadius: 16,
              marginBottom: 12,
              padding: 12,
              maxWidth: "80%",
            }}
          >
            <Text
              style={{
                color: item.sender === "me" ? "#1f2937" : "#fff",
                fontSize: 16,
              }}
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
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <View
          className="flex-row items-center bg-gray-800 px-3 py-2"
          style={{ borderTopWidth: 1, borderTopColor: "#374151" }}
        >
          <TouchableOpacity className="mr-2">
            <Ionicons name="attach" size={24} color="#ecac6d" />
          </TouchableOpacity>
          <TouchableOpacity className="mr-2">
            <Ionicons name="image" size={24} color="#ecac6d" />
          </TouchableOpacity>
          <TextInput
            className="flex-1 text-white bg-gray-700 rounded-full px-4 py-2 mr-2"
            placeholder="Message..."
            placeholderTextColor="#9CA3AF"
            value={message}
            onChangeText={setMessage}
            multiline
            style={{ maxHeight: 80 }}
          />
          {message.trim().length > 0 && (
            <TouchableOpacity className="ml-2">
              <Ionicons name="send" size={24} color="#ecac6d" />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
