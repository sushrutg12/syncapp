import { Answer } from "@/types/profile";
import { FC } from "react";
import { Text, View } from "react-native";

interface Props {
  answer: Answer;
}

export const ProfileAnswer: FC<Props> = ({ answer }) => {
  return (
    <View className="bg-gray-900 rounded-md px-5 pt-14 pb-20 gap-5 border border-neutral-700">
      <Text className="text-white font-poppins-medium">{answer?.question}</Text>
      <Text className="text-3xl font-playfair-semibold text-white">
        {answer?.answer_text}
      </Text>
    </View>
  );
};
