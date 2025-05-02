import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { FC } from "react";
import { Pressable } from "react-native";

interface Props {
  title: string;
}

export const StackHeaderV2: FC<Props> = ({ title }) => {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitleAlign: "center",
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: "#111827",
        },
        headerTitleStyle: {
          color: "#ecac6d",
        },
        headerRight: () => (
          <Pressable onPressOut={router.back}>
            <Ionicons
              name="close"
              className="text-2xl"
              style={{ color: "#ecac6d" }}
              suppressHighlighting
            />
          </Pressable>
        ),
      }}
    />
  );
};
