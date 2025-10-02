
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "react-native-rapi-ui";

export default function App() {
  return (
    <ThemeProvider theme="light">
      <Text style="" onPress={() => window.location.reload()}>Test</Text>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
});
