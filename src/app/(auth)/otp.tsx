import { useVerifyOtp } from "@/api/auth";
import { Fab } from "@/components/fab";
import { StackHeader } from "@/components/stack-header";
// Make sure router is imported
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
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
  const [otp, setOtp] = useState("");
  // Make sure phone is handled even if we skipped the previous step
  const { phone = "" } = useLocalSearchParams<{ phone?: string }>();
  const {
    mutate: verifyOtp,
    isPending,
    isError,
    error,
    reset,
  } = useVerifyOtp();

  const handleOtpChange = (text: string) => {
    if (isError) {
      reset();
    }
    setOtp(text);
  };

  const isValid = useMemo(() => {
    // Keep the original validation logic
    return otp.length === 6;
  }, [otp]);

  const handleSubmit = () => {
    // Check if the entered OTP is valid (6 digits)
    if (isValid && phone) {
      // If valid and we have a phone number (from the previous step), proceed with verification
      verifyOtp({ phone, token: otp });
      // Successful verification will trigger the redirect in (auth)/_layout.tsx
    } else {
      // If not valid, or phone is missing, skip OTP verification and navigate
      // directly to the main app tabs route, mimicking the successful auth redirect.
      console.log("Skipping OTP verification step. Navigating to main app.");
      router.replace("/(app)/(tabs)");
    }
  };

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
            Enter your verification code?
          </Text>
          <View className="h-28" />
          <View className="flex-row gap-2 h-16">
            {Array.from({ length: 6 }).map((_, index) => (
              <View
                key={index}
                className="border-b flex-1 items-center justify-center"
              >
                <Text className="text-4xl font-poppins-semibold">
                  {otp[index] || ""}
                </Text>
              </View>
            ))}
          </View>
          {/* Keep the hidden TextInput */}
          <TextInput
            className="absoulte h-1 w-1 opacity-0"
            style={
              Platform.OS === "ios" && {
                lineHeight: undefined,
              }
            }
            selectionColor={colors.black}
            keyboardType="numeric"
            textContentType="oneTimeCode"
            autoFocus={true}
            value={otp}
            onChangeText={handleOtpChange}
            maxLength={6}
          />
          {isError && (
            <Text className="text-red-500 text-sm text-center mt-4">
              {error.message}
            </Text>
          )}
        </View>
        <View className="items-end">
          <Fab
            // Button is disabled only when the verification mutation is pending
            disabled={isPending}
            onPress={handleSubmit}
            loading={isPending}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
