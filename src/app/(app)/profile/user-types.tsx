// app/(app)/profile/user-types.tsx
import { useUserTypes } from "@/api/options";
import { StackHeaderV4 } from "@/components/stack-header-v4";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/store/auth";
import { useEdit } from "@/store/edit";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function UserTypeScreen() {
  const { session } = useAuth();
  const { edits, setEdits } = useEdit();
  const { data: options } = useUserTypes();
  const [selected, setSelected] = useState<string>(edits?.user_types || "User");

  useEffect(() => {
    if (edits?.user_types) setSelected(edits.user_types);
  }, [edits]);

  const save = async () => {
    if (!session) return;
    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({ user_types: selected } as any)
        .eq("user_id", session.user.id);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      setEdits({ ...edits!, user_types: selected });
      router.back();
    } catch (err) {
      console.error("Full error:", err);
      // Display error to user
      alert(
        "Error saving: " +
          (err instanceof Error ? err.message : "Unknown error")
      );
    }
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
