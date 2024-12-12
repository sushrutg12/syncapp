import { fonts } from "@/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { VideoView } from "expo-video";
import { cssInterop } from "nativewind";
import { useEffect } from "react";
import "../../global.css";

cssInterop(VideoView, { className: { target: "style" } });
cssInterop(Ionicons, { className: { target: "style" } });

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
