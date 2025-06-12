// src/app/(auth)/sign-in.tsx
import { Link, Stack } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex-1" style={{ backgroundColor: "#111827" }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1 p-10">
        <View className="flex-1 items-center justify-center">
          <Text
            className="text-6xl font-playfair-semibold"
            style={{ color: "#ecac6d" }}
          >
            Sync
          </Text>
          <View className="h-4" />
          <Text
            className="text-xl font-poppins-semibold"
            style={{ color: "#ecac6d" }}
          >
             Match. Build. Grow.
          </Text>
        </View>
        <Link href={"/phone"} asChild>
          <Pressable
            className="h-16 items-center justify-center rounded-full"
            style={{
              backgroundColor: "#111827",
              borderColor: "#ecac6d",
              borderWidth: 1,
            }}
          >
            <Text
              className="text-lg font-poppins-semibold"
              style={{ color: "#ecac6d" }}
            >
              Sign in with Phone Number
            </Text>
          </Pressable>
        </Link>
      </SafeAreaView>
    </View>
  );
}
