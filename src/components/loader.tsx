import { FC } from "react";
import { ActivityIndicator, Image, View } from "react-native";

interface Props {}

export const Loader: FC<Props> = () => {
  return (
    <View className="flex-1 bg-gray-900 items-center justify-center">
      <Image
        source={require("~/assets/images/sync-logo.png")}
        className="w-32 h-32 mb-8"
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#ecac6d" />
    </View>
  );
};
