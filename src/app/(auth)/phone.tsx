import { useSignInWithOtp } from "@/api/auth";
import { Fab } from "@/components/fab";
import { StackHeader } from "@/components/stack-header";
// router is already imported
import { router, useFocusEffect } from "expo-router";
import { useMemo, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

export default function Page() {
  const [phone, setPhone] = useState("");
  const phoneRef = useRef<TextInput>(null);
  const {
    mutate: signInWithOtp,
    isPending,
    isError,
    error,
    reset,
  } = useSignInWithOtp();

  const handlePhoneChange = (text: string) => {
    if (isError) {
      reset();
    }
    setPhone(text);
  };

  const isValid = useMemo(() => {
    // Keep the original validation logic
    return /^\+[1-9]\d{1,14}$/.test(phone);
  }, [phone]);

  const handleSubmit = () => {
    // Check if the entered phone number is valid according to the original check
    if (isValid) {
      // If valid, proceed with OTP sign-in
      signInWithOtp(phone, {
        onSuccess: () =>
          router.push({
            pathname: "/otp",
            params: { phone },
          }),
      });
    } else {
      // If not valid, skip OTP and navigate elsewhere
      // *** Replace '/home' with the actual route you want to navigate to when skipping ***
      console.log("Skipping phone authentication step.");
      router.push("/otp"); // Using replace to avoid adding the phone screen to history
    }
  };

  useFocusEffect(() => {
    phoneRef.current?.focus();
  });

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white p-5"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <StackHeader />
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-1 justify-center pt-28">
        <View className="flex-1">
          <Text className="text-4xl font-playfair-semibold">
            What's your phone number?
          </Text>
          <View className="h-28" />
          <TextInput
            className="border-b h-16 text-4xl font-poppins-semibold"
            style={
              Platform.OS === "ios" && {
                lineHeight: undefined,
              }
            }
            selectionColor={colors.black}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            autoFocus={true}
            value={phone}
            onChangeText={handlePhoneChange}
            maxLength={16}
            ref={phoneRef}
          />
          {isError && (
            <Text className="text-red-500 text-sm text-center mt-4">
              {error.message}
            </Text>
          )}
        </View>
        <View className="items-end">
          <Fab
            // Button is disabled only when the sign-in mutation is pending
            disabled={isPending}
            onPress={handleSubmit}
            loading={isPending}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}