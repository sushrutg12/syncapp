import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MoveHorizontal as MoreHorizontal, Send } from "lucide-react-native";
import React, { useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
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

interface Message {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unread: boolean;
  online: boolean;
}

const messages: Message[] = [
  {
    id: "1",
    name: "Jessica Chen",
    lastMessage:
      "Thanks for connecting! Would love to discuss the design system project.",
    time: "2m",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    unread: true,
    online: true,
  },
  {
    id: "2",
    name: "Alexander Rodriguez",
    lastMessage: "The React architecture looks solid. Let's schedule a call.",
    time: "1h",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    unread: true,
    online: true,
  },
  {
    id: "3",
    name: "Priya Sharma",
    lastMessage: "Great meeting you at the conference! Here's my portfolio.",
    time: "3h",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    unread: false,
    online: false,
  },
  {
    id: "4",
    name: "Marcus Johnson",
    lastMessage: "The startup idea has potential. Let's explore partnerships.",
    time: "1d",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    unread: false,
    online: true,
  },
  {
    id: "5",
    name: "Sarah Kim",
    lastMessage: "Thanks for the introduction to the team at Google.",
    time: "2d",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
    unread: false,
    online: false,
  },
];

function MessageItem({ message, index }: { message: Message; index: number }) {
  const router = useRouter();
  const translateX = useSharedValue(100);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateX.value = withDelay(
      index * 100,
      withSpring(0, {
        damping: 15,
        stiffness: 100,
      })
    );
    opacity.value = withDelay(index * 100, withTiming(1, { duration: 600 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        style={styles.messageItem}
        activeOpacity={0.7}
        onPress={() =>
          router.push({
            pathname: "/(app)/(tabs)/matches/[id]",
            params: { id: message.id, name: message.name },
          })
        }
      >
        <View style={styles.avatarContainer}>
          <Image source={{ uri: message.avatar }} style={styles.avatar} />
          {message.online && <View style={styles.onlineIndicator} />}
        </View>

        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.senderName}>{message.name}</Text>
            <Text style={styles.messageTime}>{message.time}</Text>
          </View>
          <Text
            style={[styles.lastMessage, message.unread && styles.unreadMessage]}
            numberOfLines={2}
          >
            {message.lastMessage}
          </Text>
        </View>

        <View style={styles.messageActions}>
          {message.unread && <View style={styles.unreadDot} />}
          <TouchableOpacity style={styles.moreButton}>
            <MoreHorizontal size={20} color="#666666" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function MessagesScreen() {
  const headerOpacity = useSharedValue(0);
  const headerTranslateY = useSharedValue(-30);

  useEffect(() => {
    headerOpacity.value = withTiming(1, { duration: 800 });
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
      <LinearGradient
        colors={["#000000", "#1a1a1a", "#2a2a2a"]}
        style={styles.background}
      />

      <Animated.View style={[styles.header, headerAnimatedStyle]}>
        <Text style={styles.title}>Messages</Text>
        <Text style={styles.subtitle}>Professional conversations</Text>
      </Animated.View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {messages.map((message, index) => (
          <MessageItem key={message.id} message={message} index={index} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.composeButton} activeOpacity={0.8}>
        <LinearGradient
          colors={["#FFA46A", "#FA6739"]}
          style={styles.composeGradient}
        >
          <Send size={24} color="#000000" />
        </LinearGradient>
      </TouchableOpacity>
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
  title: {
    fontSize: 32,
    fontFamily: "playfair-bold",
    color: "#FFA46A",
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#999999",
    fontFamily: "poppins-regular",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 164, 106, 0.1)",
  },
  avatarContainer: {
    position: "relative",
    marginRight: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#FFA46A",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "#000000",
  },
  messageContent: {
    flex: 1,
    marginRight: 12,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  senderName: {
    fontSize: 16,
    fontFamily: "poppins-semibold",
    color: "#ffffff",
  },
  messageTime: {
    fontSize: 12,
    color: "#999999",
    fontFamily: "poppins-regular",
  },
  lastMessage: {
    fontSize: 14,
    color: "#cccccc",
    fontFamily: "poppins-regular",
    lineHeight: 20,
  },
  unreadMessage: {
    color: "#ffffff",
    fontFamily: "poppins-medium",
  },
  messageActions: {
    alignItems: "center",
    gap: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFA46A",
  },
  moreButton: {
    padding: 4,
  },
  composeButton: {
    position: "absolute",
    bottom: 100,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    shadowColor: "#FFA46A",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  composeGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
