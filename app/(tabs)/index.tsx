import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView); // RNSafeAreaView;
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-7xl  font-sans-extrabold ">Home</Text>
      <Link
        href="/onboarding"
        className="font-sans-bold mt-4 rounded bg-primary text-white p-4"
      >
        Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="font-sans-bold mt-4 rounded bg-primary text-white p-4"
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="font-sans-bold mt-4 rounded bg-primary text-white p-4"
      >
        Sign Up
      </Link>
    </SafeAreaView>
  );
}
