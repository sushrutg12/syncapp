import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { FC } from "react";
import { Pressable } from "react-native";

interface Props {
  title: string;
  onPressBack?: () => void;
}

export const StackHeaderV4: FC<Props> = ({ title, onPressBack }) => {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#111827", // Dark navy background
        },
        headerTitleStyle: {
          color: "#ecac6d", // Gold text for the title
        },
        headerLeft: () => (
          <Pressable onPressOut={onPressBack}>
            <Ionicons
              name="chevron-back"
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
