import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const mockCandidates = {
  "1": {
    id: "1",
    name: "Jess",
    tagline: "Creative Developer & Designer",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    compatibility: 8.5,
    skills: ["React", "Figma", "Branding"],
    description:
      "Award-winning creative developer and designer with a passion for building beautiful, functional products.",
    portfolio: [
      {
        id: "p1",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        desc: "Brand Campaign",
      },
      {
        id: "p2",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        desc: "UI/UX Project",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Alex",
    tagline: "Full Stack Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    compatibility: 9.2,
    skills: ["Node.js", "TypeScript", "AWS"],
    description:
      "Experienced engineer with a track record of shipping scalable web apps and APIs.",
    portfolio: [
      {
        id: "p1",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        desc: "E-commerce Platform",
      },
      {
        id: "p2",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        desc: "DevOps Automation",
      },
    ],
  },
  "3": {
    id: "3",
    name: "Priya",
    tagline: "Product Manager",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    compatibility: 7.8,
    skills: ["Agile", "Roadmaps", "User Research"],
    description:
      "Product leader with a knack for aligning teams and shipping features users love.",
    portfolio: [
      {
        id: "p1",
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41",
        desc: "Mobile App Launch",
      },
      {
        id: "p2",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        desc: "Growth Campaign",
      },
    ],
  },
};

export default function CandidateProfileScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const candidate = mockCandidates[id as keyof typeof mockCandidates];
  if (!candidate)
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Not found</Text>
      </View>
    );
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} color="#ffb96a" />
      </TouchableOpacity>
      <Image
        source={{ uri: candidate.profileImage }}
        style={styles.largeAvatar}
      />
      <Text style={styles.name}>{candidate.name}</Text>
      <Text style={styles.tagline}>{candidate.tagline}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreLabel}>Compatibility</Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progress,
              { width: `${candidate.compatibility * 10}%` },
            ]}
          />
        </View>
        <Text style={styles.scoreValue}>{candidate.compatibility}/10</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        {candidate.skills.map((skill) => (
          <View
            key={skill}
            style={{
              backgroundColor: "#23234a",
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 4,
              margin: 4,
            }}
          >
            <Text style={{ color: "#ffb96a", fontSize: 13 }}>{skill}</Text>
          </View>
        ))}
      </View>
      <ScrollView
        horizontal
        style={styles.portfolioContainer}
        showsHorizontalScrollIndicator={false}
      >
        {candidate.portfolio.map((item) => (
          <View key={item.id} style={styles.portfolioCard}>
            <Image source={{ uri: item.image }} style={styles.portfolioImage} />
            <Text style={styles.portfolioDesc}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.description}>{candidate.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#12122b", padding: 16 },
  largeAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  tagline: {
    color: "#cfcfcf",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  scoreContainer: { alignItems: "center", marginVertical: 12 },
  scoreLabel: { color: "#ffb96a", fontSize: 16 },
  progressBar: {
    width: 180,
    height: 10,
    backgroundColor: "#23234a",
    borderRadius: 5,
    marginVertical: 6,
  },
  progress: { height: 10, backgroundColor: "#ffb96a", borderRadius: 5 },
  scoreValue: { color: "#ffb96a", fontSize: 16 },
  portfolioContainer: { flexDirection: "row", marginVertical: 16 },
  portfolioCard: { marginRight: 12, alignItems: "center" },
  portfolioImage: { width: 100, height: 100, borderRadius: 10 },
  portfolioDesc: { color: "#fff", fontSize: 12, marginTop: 4 },
  description: { color: "#fff", fontSize: 16, marginTop: 20 },
  backButton: {
    position: "absolute",
    top: 16,
    left: 12,
    zIndex: 10,
    backgroundColor: "rgba(36,36,36,0.7)",
    borderRadius: 20,
    padding: 4,
  },
});
