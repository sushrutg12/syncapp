import { useMyProfile } from "@/api/my-profile";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HingeLogo from "~/assets/images/hinge-logo.svg";
// Create a custom card component right in the file
const GoldCard = ({ 
  icon, 
  title, 
  subtitle, 
  ...rest 
}: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string; 
  [key: string]: any;
}) => {
  return (
    <Pressable
      {...rest}
      className="flex-row items-center gap-4 border rounded-md p-3"
      style={{ borderColor: "#ecac6d" }}
    >
      <View
        className="h-12 aspect-square rounded-full items-center justify-center"
        style={{
          backgroundColor: "#1a1a1a",
          borderColor: "#ecac6d",
          borderWidth: 1,
        }}
      >
        {icon}
      </View>
      <View>
        <Text className="font-poppins-medium" style={{ color: "#ecac6d" }}>
          {title}
        </Text>
        <Text
          className="text-sm font-poppins-light"
          style={{ color: "#ecac6d" }}
        >
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
};

export default function Page() {
  const { data: profile } = useMyProfile();
  return (
    <>
      {/* make status bar light-content on your gray-900 background */}
      <StatusBar style="light" backgroundColor="#1f2937" translucent={false} />

      {/* fill top & bottom safe areas */}
      <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-gray-900">
        <Stack.Screen options={{ headerShown: false }} />

        <View
          className="px-5 border-b border-neutral-300"
          style={{ borderColor: "#ecac6d" }}
        >
          <View className="flex-row items-center justify-between">
            <HingeLogo width={64} />
            <View className="flex-row items-center gap-4">
              <Link href="/preferences" suppressHighlighting>
                <Ionicons
                  name="options-outline"
                  className="text-2xl"
                  style={{ color: "#ecac6d" }}
                />
              </Link>
              <Link href="/settings" suppressHighlighting>
                <Ionicons
                  name="settings-outline"
                  className="text-2xl"
                  style={{ color: "#ecac6d" }}
                />
              </Link>
            </View>
          </View>

          <View className="items-center gap-2 my-12">
            <Pressable
              className="h-32 aspect-square rounded-full border-4 p-1"
              style={{ borderColor: "#ecac6d" }}
              onPress={() => router.push("/profile")}
            >
              <Image
                source={profile?.avatar_url}
                className="flex-1 rounded-full bg-neutral-400"
              />
            </Pressable>
            <Text
              className="text-2xl font-poppins-semibold"
              style={{ color: "#ecac6d" }}
            >
              {profile?.first_name}
            </Text>
          </View>
        </View>

        <View className="flex-1 p-5 gap-4">
          <GoldCard
            key="help"
            icon={
              <Ionicons
                name="help"
                className="text-2xl"
                style={{ color: "#ecac6d" }}
              />
            }
            title="Help Center"
            subtitle="Safety, Security, and more"
          />
          <GoldCard
            key="what-works"
            icon={
              <Ionicons
                name="bulb-outline"
                className="text-2xl"
                style={{ color: "#ecac6d" }}
              />
            }
            title="What Works"
            subtitle="Check out our expert dating tips"
          />
        </View>
      </SafeAreaView>
    </>
  );
}
