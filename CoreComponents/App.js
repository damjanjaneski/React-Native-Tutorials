import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = function () {
    console.log("abc");
  };

  return (
    <View style={styles.container}>
      <Text>TEST</Text>
      <Button title="Press" onPress={() => handlePress()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
