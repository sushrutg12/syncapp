import { fonts } from "@/constants/fonts";
import { AuthProvider } from "@/store/auth";
import { Ionicons } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { SplashScreen, Stack } from "expo-router";
import { VideoView } from "expo-video";
import { cssInterop } from "nativewind";
import { useEffect } from "react";
import MapView from "react-native-maps";
import "../../global.css";

cssInterop(VideoView, { className: { target: "style" } });
cssInterop(Ionicons, { className: { target: "style" } });
cssInterop(Image, { className: { target: "style" } });
cssInterop(MapView, { className: { target: "style" } });

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="(app)"
            options={{
              animation: "none",
            }}
          />
          <Stack.Screen
            name="(auth)"
            options={{
              animation: "none",
            }}
          />
        </Stack>
      </AuthProvider>
    </QueryClientProvider>
  );
}
