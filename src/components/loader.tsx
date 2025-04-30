import LottieView from "lottie-react-native";
import { FC } from "react";
import { View } from "react-native";

interface Props {}

export const Loader: FC<Props> = () => {
  return (
    <View className="flex-1 bg-gray-900">
      <LottieView
        autoPlay
        // @ts-ignore
        className="w-full h-full bg-gray-900 mt-12"
        source={require("~/assets/images/loading.json")}
      />
    </View>
  );
};
