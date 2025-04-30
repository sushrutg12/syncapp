import { Stack } from "expo-router";
import colors from "tailwindcss/colors";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.gray[900],
        },
        headerTitleStyle: {
          color: colors.white,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          animation: "none",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          animation: "none",
        }}
      />
    </Stack>
  );
}
