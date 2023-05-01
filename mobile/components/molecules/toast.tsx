import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

interface Params {
  msg: string;
}

export default function Toast({ msg }: Params) {
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (msg !== "") {
      // Show toast message
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          // Hide toast message
          Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          });
        }, 2000);
      });
    }
  }, [msg, fadeAnimation]);

  return (
    <View style={styles.container}>
      {msg !== "" && (
        <Animated.View
          style={[styles.toastContainer, { opacity: fadeAnimation }]}
        >
          <Text style={styles.toastText}>{msg}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
  toastContainer: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 5,
  },
  toastText: {
    color: "#fff",
    fontSize: 16,
  },
});
