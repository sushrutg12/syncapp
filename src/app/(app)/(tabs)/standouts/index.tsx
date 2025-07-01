import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Award,
  Briefcase,
  Heart,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

interface Profile {
  id: string;
  name: string;
  title: string;
  company: string;
  match: string;
  image: string;
  age?: number;
  location?: string;
  experience: string;
  skills: string[];
  achievements: number;
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "Jessica Chen",
    title: "Senior Product Designer",
    company: "Meta",
    match: "94",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 28,
    location: "San Francisco, CA",
    experience: "6+ years",
    skills: ["UI/UX", "Figma", "Design Systems"],
    achievements: 12,
  },
  {
    id: "2",
    name: "Alexander Rodriguez",
    title: "Engineering Manager",
    company: "Stripe",
    match: "89",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 31,
    location: "New York, NY",
    experience: "8+ years",
    skills: ["Leadership", "React", "Node.js"],
    achievements: 18,
  },
  {
    id: "3",
    name: "Priya Sharma",
    title: "VP of Product",
    company: "Airbnb",
    match: "91",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 29,
    location: "Seattle, WA",
    experience: "7+ years",
    skills: ["Strategy", "Analytics", "Growth"],
    achievements: 15,
  },
];

function ProfileCard({ profile, index }: { profile: Profile; index: number }) {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    translateY.value = withDelay(
      index * 200,
      withSpring(0, {
        damping: 15,
        stiffness: 100,
      })
    );
    opacity.value = withDelay(index * 200, withTiming(1, { duration: 800 }));
    scale.value = withDelay(
      index * 200,
      withSpring(1, {
        damping: 12,
        stiffness: 120,
      })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
      opacity: opacity.value,
    };
  });

  const handleMessage = () => {
    router.push({
      pathname: "/(app)/(tabs)/matches/[id]",
      params: { id: profile.id, name: profile.name },
    });
  };

  const handleLike = () => {
    console.log(`Connect with ${profile.name}`);
  };

  const handlePass = () => {
    console.log(`Pass ${profile.name}`);
  };

  return (
    <Animated.View style={[styles.cardContainer, animatedStyle]}>
      <View style={styles.card}>
        <LinearGradient
          colors={["#F4E0CC", "#ffffff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardGradient}
        >
          {/* Header Section */}
          <View style={styles.cardHeader}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: profile.image }}
                style={styles.profileImage}
              />
              <View style={styles.matchBadge}>
                <Text style={styles.matchText}>{profile.match}%</Text>
              </View>
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileTitle}>{profile.title}</Text>
              <View style={styles.companyContainer}>
                <Briefcase size={14} color="#FA6739" />
                <Text style={styles.companyText}>{profile.company}</Text>
              </View>
            </View>
          </View>

          {/* Details Section */}
          <View style={styles.detailsSection}>
            <View style={styles.detailRow}>
              <MapPin size={16} color="#666666" />
              <Text style={styles.detailText}>{profile.location}</Text>
            </View>
            <View style={styles.detailRow}>
              <Award size={16} color="#666666" />
              <Text style={styles.detailText}>
                {profile.experience} • {profile.achievements} achievements
              </Text>
            </View>
          </View>

          {/* Skills Section */}
          <View style={styles.skillsSection}>
            <Text style={styles.skillsTitle}>Key Skills</Text>
            <View style={styles.skillsContainer}>
              {profile.skills.map((skill, skillIndex) => (
                <View key={skillIndex} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, styles.passButton]}
              onPress={handlePass}
              activeOpacity={0.8}
            >
              <X size={22} color="#FF595A" strokeWidth={2.5} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.messageButton]}
              onPress={handleMessage}
              activeOpacity={0.8}
            >
              <MessageCircle
                size={32}
                color="#fff"
                fill="#000"
                strokeWidth={2.5}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.likeButton]}
              onPress={handleLike}
              activeOpacity={0.8}
            >
              <Heart
                size={22}
                color="#FFA46A"
                fill="#FFA46A"
                strokeWidth={2.5}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </Animated.View>
  );
}

export default function StandoutsScreen() {
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-30);

  useEffect(() => {
    headerOpacity.value = withTiming(1, { duration: 1000 });
    headerTranslateY.value = withSpring(0, {
      damping: 15,
      stiffness: 100,
    });
  }, []);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: headerOpacity.value,
      transform: [{ translateY: headerTranslateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={["#000000", "#1a1a1a", "#2a2a2a"]}
        style={styles.background}
      />

      <Animated.View style={[styles.header, headerAnimatedStyle]}>
        <Text style={styles.logo}>STANDOUTS</Text>
        <Text style={styles.subtitle}>Connect with industry leaders</Text>
      </Animated.View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.id} profile={profile} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: "center",
  },
  logo: {
    fontSize: 28,
    fontFamily: "playfair-bold",
    color: "#FFA46A",
    letterSpacing: 3,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#999999",
    fontFamily: "poppins-regular",
    letterSpacing: 0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  cardContainer: {
    marginBottom: 24,
  },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  cardGradient: {
    padding: 24,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    position: "relative",
    marginRight: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFA46A",
  },
  matchBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#FA6739",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  matchText: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "poppins-bold",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontFamily: "playfair-bold",
    color: "#000000",
    marginBottom: 4,
  },
  profileTitle: {
    fontSize: 16,
    color: "#333333",
    fontFamily: "poppins-medium",
    marginBottom: 6,
  },
  companyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  companyText: {
    fontSize: 14,
    color: "#FA6739",
    fontFamily: "poppins-semibold",
  },
  detailsSection: {
    marginBottom: 20,
    gap: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "poppins-regular",
  },
  skillsSection: {
    marginBottom: 24,
  },
  skillsTitle: {
    fontSize: 16,
    fontFamily: "poppins-semibold",
    color: "#000000",
    marginBottom: 12,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillTag: {
    backgroundColor: "#FFA46A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  skillText: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "poppins-medium",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  passButton: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#FF595A",
  },
  messageButton: {
    backgroundColor: "#000000",
    borderWidth: 2,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  likeButton: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#FFA46A",
  },
});
