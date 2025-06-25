import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const standouts = [
  {
    id: "1",
    name: "Jess",
    tagline: "Creative Developer & Designer",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    compatibility: 8.5,
  },
  {
    id: "2",
    name: "Alex",
    tagline: "Full Stack Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    compatibility: 9.2,
  },
  {
    id: "3",
    name: "Priya",
    tagline: "Product Manager",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    compatibility: 7.8,
  },
];

const CARD_HEIGHT = Math.floor(Dimensions.get("window").height * 0.18);
const PROFILE_IMG_SIZE = 60;

export default function StandoutsScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>STANDOUTS</Text>
      {standouts.map((item, idx) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.card, { marginTop: idx === 0 ? 12 : 0 }]}
          activeOpacity={0.85}
          onPress={() =>
            router.push({
              pathname: "/(app)/(tabs)/standouts/profile",
              params: { id: item.id },
            })
          }
        >
          <View style={styles.profileImgWrapper}>
            <Image
              source={{ uri: item.profileImage }}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.tagline}>{item.tagline}</Text>
            <Text style={styles.compatibility}>
              Match: {item.compatibility}/10
            </Text>
            <TouchableOpacity
              style={styles.messageButton}
              onPress={() =>
                router.push({
                  pathname: "/(app)/(tabs)/matches/chat",
                  params: { id: item.id },
                })
              }
            >
              <Ionicons name="chatbubble-ellipses" size={22} color="#F4C087" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12122b",
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  header: {
    color: "#ffb96a",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 35,
    textAlign: "center",
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#23234a",
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 65,
    minHeight: CARD_HEIGHT,
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
    position: "relative",
    overflow: "visible",
  },
  profileImgWrapper: {
    position: "absolute",
    top: -PROFILE_IMG_SIZE / 2,
    left: "50%",
    marginLeft: -PROFILE_IMG_SIZE / 2,
    zIndex: 2,
    backgroundColor: "#23234a",
    borderRadius: PROFILE_IMG_SIZE / 2,
    padding: 4,
    borderWidth: 3,
    borderColor: "#ffb96a",
  },
  profileImg: {
    width: PROFILE_IMG_SIZE,
    height: PROFILE_IMG_SIZE,
    borderRadius: PROFILE_IMG_SIZE / 2,
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: PROFILE_IMG_SIZE / 2 + 12,
    width: "100%",
    paddingHorizontal: 12,
  },
  name: { color: "#fff", fontSize: 24, fontWeight: "bold", marginTop: 40 },
  tagline: {
    color: "#cfcfcf",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  compatibility: { color: "#ffb96a", fontSize: 16, marginTop: 8 },
  messageButton: {
    marginTop: 4,
    backgroundColor: "#181A23",
    borderRadius: 16,
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
});
