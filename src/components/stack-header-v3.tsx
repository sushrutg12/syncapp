import { Stack } from "expo-router";
import { FC } from "react";
import { Pressable, Text } from "react-native";

interface Props {
  title?: string;
  onPressCancel?: () => void;
  onPressDone?: () => void;
}

export const StackHeaderV3: FC<Props> = ({
  title,
  onPressCancel,
  onPressDone,
}) => {
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        title: title,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#111827", // Dark navy background
        },
        headerTitleStyle: {
          color: "#ecac6d", // Gold text for the title
        },
        headerLeft: () => (
          <Pressable onPressOut={onPressCancel}>
            <Text className="font-semibold" style={{ color: "#ecac6d" }}>
              Cancel
            </Text>
          </Pressable>
        ),
        headerRight: () => (
          <Pressable onPressOut={onPressDone}>
            <Text className="font-semibold" style={{ color: "#ecac6d" }}>
              Done
            </Text>
          </Pressable>
        ),
        headerShadowVisible: false,
      }}
    />
  );
};
