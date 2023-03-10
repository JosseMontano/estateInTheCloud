import { StyleSheet, Text, View, Image } from "react-native";
import { Navbar } from "./components/navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#254552",
  },
});
