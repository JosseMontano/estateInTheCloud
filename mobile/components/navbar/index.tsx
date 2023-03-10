import { StyleSheet, Text, View, Image } from "react-native";

export function Navbar() {
  return (
    <View style={styles.container_header}>
      <Text style={styles.Icon}>START</Text>
      <View style={styles.container_text}>
        <Text style={styles.text}>ISABEL6</Text>
        <Text style={styles.text}>CONFIGURATION</Text>
        <Text style={styles.text}>LOGOUT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_header: {
    flexDirection: "row",
    backgroundColor: "#162b33",
    justifyContent: "space-between",
    padding: 10,
  },

  container_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    margin: 10,
    color: "#fff",
  },

  Icon: {
    margin: 10,
    color: "#fff",
    fontSize: 26,
  },
});


