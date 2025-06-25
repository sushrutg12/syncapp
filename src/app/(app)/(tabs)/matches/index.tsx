import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const standoutProfiles = [
  {
    id: "1",
    name: "Jess",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    name: "Alex",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "3",
    name: "Priya",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const connections = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    tags: "Full Stack, React, Node.js",
    lastMessage: "Looking forward to discussing the opportunity!",
    timestamp: "Yesterday",
  },
  {
    id: "2",
    name: "Jordan Chen",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    tags: "UI/UX, Figma, React",
    lastMessage: "Thanks for the offer! Let me review the details.",
    timestamp: "3 days ago",
  },
  {
    id: "3",
    name: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    tags: "Product, Agile, Roadmaps",
    lastMessage: "Let's sync up next week.",
    timestamp: "5 days ago",
  },
];

export default function MessagesListScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Standouts Section */}
      <Text style={styles.standoutsTitle}>Standouts</Text>
      <View style={styles.bubbleRow}>
        {standoutProfiles.map((profile) => (
          <TouchableOpacity
            key={profile.id}
            style={styles.bubbleContainer}
            onPress={() =>
              router.push({
                pathname: "/(app)/(tabs)/standouts/profile",
                params: { id: profile.id },
              })
            }
          >
            <Image
              source={{ uri: profile.profileImage }}
              style={styles.bubbleImage}
            />
            <Text style={styles.bubbleName}>{profile.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Connections Section */}
      <Text style={styles.header}>Connections</Text>
      <FlatList
        data={connections}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/(app)/(tabs)/matches/chat",
                params: { id: item.id },
              })
            }
          >
            <View style={styles.card}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.tags}>{item.tags}</Text>
                <Text style={styles.message}>{item.lastMessage}</Text>
              </View>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 0, marginTop: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A23",
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  standoutsTitle: {
    color: "#F4C087",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 4,
    marginLeft: 4,
    textAlign: "left",
  },
  bubbleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginLeft: 0,
    minHeight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  bubbleContainer: {
    alignItems: "center",
    marginRight: 12,
    minWidth: 60,
  },
  bubbleImage: {
    width: 80,
    height: 80,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#F4C087",
  },
  bubbleName: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
    fontWeight: "500",
    maxWidth: 60,
    textAlign: "center",
  },
  header: {
    color: "#F4C087",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 0,
    marginLeft: 0,
    textAlign: "left",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#23243A",
    borderRadius: 14,
    marginVertical: 8,
    padding: 14,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 14 },
  info: { flex: 1 },
  name: { color: "#fff", fontSize: 17, fontWeight: "600" },
  tags: { color: "#B0B4C0", fontSize: 13, marginBottom: 2 },
  message: { color: "#D9D9D9", fontSize: 14 },
  timestamp: { color: "#B0B4C0", fontSize: 12, marginLeft: 8 },
});
