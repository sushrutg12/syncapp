import { PrivateProfile } from "@/api/my-profile/types";
import { cn } from "@/utils/cn";
import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface Props {
  data: {
    title: string;
    getValue: (profile: PrivateProfile) => string;
    route: string;
  }[];
  title: string;
  profile: PrivateProfile;
}

export const List: FC<Props> = ({ title, data, profile }) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      keyExtractor={(item) => item.title}
      ListHeaderComponent={() => {
        return (
          <Text
            className="font-poppins-semibold mb-2"
            style={{ color: "#ecac6d" }}
          >
            {title}
          </Text>
        );
      }}
      renderItem={({ item }) => {
        return (
          <Link href={item.route as Href} asChild>
            <Pressable
              className="flex-row items-center justify-between pr-5 border-b py-3"
              style={{ borderColor: "#ecac6d" }}
            >
              <View>
                <Text
                  className={cn("font-poppins-regular", {
                    "text-red-700":
                      ["Name", "Age", "Location", "Gender"].includes(
                        item.title
                      ) && item.getValue(profile) === "None",
                  })}
                  style={{ color: "#ecac6d" }}
                >
                  {item.title}
                </Text>
                <Text
                  className={cn("font-poppins-light", {
                    "text-red-700":
                      ["Name", "Age", "Location", "Gender"].includes(
                        item.title
                      ) && item.getValue(profile) === "None",
                  })}
                  style={{ color: "#ecac6d" }}
                >
                  {item.getValue(profile!)}
                </Text>
              </View>
              <Ionicons name="chevron-forward" style={{ color: "#ecac6d" }} />
            </Pressable>
          </Link>
        );
      }}
    />
  );
};
