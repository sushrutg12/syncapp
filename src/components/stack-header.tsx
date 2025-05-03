import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { FC } from "react";
import { Pressable } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

export const StackHeader: FC<Props> = () => {
  return (
    <Stack.Screen
      options={{
        headerBackVisible: false,
        title: "",
        headerStyle: {
          backgroundColor: "#111827",
        },
        headerRight: () => (
          <Pressable onPress={router.back}>
            <Ionicons
              name="close"
              className="text-2xl"
              style={{ color: "#ecac6d" }}
              suppressHighlighting
            />
          </Pressable>
        ),
        headerShadowVisible: false,
      }}
    />
  );
};
