// app/(app)/profile/user-type.tsx
import { View, Text, Pressable } from "react-native";
import { useAuth } from "@/store/auth";
import { useEdit } from "@/store/edit";
import { useUserTypes } from "@/api/options";
import { supabase } from "@/lib/supabase";
import { StackHeaderV4 } from "@/components/stack-header-v4";
import { router } from "expo-router";
import { useState, useEffect } from "react";

export default function UserTypeScreen() {
  const { session } = useAuth();
  const { edits, setEdits } = useEdit();
  const { data: options } = useUserTypes();
  const [selected, setSelected] = useState<string>(edits?.user_type || "User");

  useEffect(() => {
    if (edits?.user_type) setSelected(edits.user_type);
  }, [edits]);

  const save = async () => {
    if (!session) return;
    await supabase
      .from("profiles")
      .update({ user_type: selected } as any)
      .eq("id", session.user.id);
    setEdits({ ...edits!, user_type: selected });
    router.back();
  };

  return (
    <View className="flex-1 bg-gray-900 p-5">
      <StackHeaderV4 title="I am a…" onPressBack={save} />
      {options.map((opt) => (
        <Pressable
          key={opt.id}
          onPress={() => setSelected(opt.name)}
          className={`py-3 px-4 rounded mb-2 ${
            selected === opt.name ? "bg-fuchsia-700" : "bg-gray-800"
          }`}
        >
          <Text className="text-white">{opt.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}
