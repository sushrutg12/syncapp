import { useLikes } from "@/api/profiles";
import { Empty } from "@/components/empty";
import { LikeCard } from "@/components/like-card";
import { Loader } from "@/components/loader";
import { useRefreshOnFocus } from "@/hooks/refetch";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function Page() {
  const { data, isFetching, isError, refetch } = useLikes();
  useRefreshOnFocus(refetch);

  const renderHeader = () => {
    return (
      <View className="gap-5 bg-gray-900 ">
        <Text className="text-3xl font-poppins-semibold">Likes You</Text>
        {data.length > 0 && (
          <>
            <Link href={`/likes/${data[0].id}`} asChild>
              <Pressable className="bg-gray-900 flex-1 rounded-lg overflow-hidden border border-neutral-700">
                <View className="p-4 gap-5">
                  <Text className="text-white font-poppins-light">{`Liked your ${
                    data[0].photo_url ? "photo" : "answer"
                  }`}</Text>
                  <Text className="text-xl font-poppins-medium">
                    {data[0].profile.first_name}
                  </Text>
                </View>
                <View className="p-4">
                  <View className="rounded-lg flex-1 bg-neutral-200 aspect-square w-full overflow-hidden">
                    <Image
                      source={data[0].profile.photos[0].photo_url}
                      className="flex-1"
                    />
                  </View>
                </View>
              </Pressable>
            </Link>
          </>
        )}
      </View>
    );
  };

  const renderEmpty = () => {
    if (data.length === 1) {
      return null;
    }

    if (isFetching) {
      return <Loader />;
    }

    if (isError) {
      return (
        <Empty
          title="Something went wrong"
          subTitle=" We ran into a problem loading your likes, sorry about that!"
          primaryText="Try again"
          onPrimaryPress={() => refetch()}
        />
      );
    }

    return (
      <Empty
        title="No likes yet"
        subTitle="We can help you get your first one sooner."
      />
    );
  };

  return (
    <View className="flex-1 bg-gray-900">
      <FlatList
        data={data.length > 1 ? data.slice(1) : []}
        renderItem={({ item, index }) => {
          return (
            <>
              <LikeCard like={item} />
              {data.length % 2 === 0 && index === data.length - 2 && (
                <View className="flex-1" />
              )}
            </>
          );
        }}
        numColumns={2}
        contentContainerClassName="gap-4 px-5 pb-20 grow justify-content"
        columnWrapperClassName="gap-4"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
}
