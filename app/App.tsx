
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "react-native-rapi-ui";

export default function App() {
  return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>
          <Text className="text-black text-2xl font-bold">Hello world ! </Text>
          <Text className="text-black text-sm font-bold">powered by Tailwind</Text>
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
});
