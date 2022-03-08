import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image
      source={require("../../assets/logo/logo-re-order-it.png")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 35,
    width: 250,
    height: 50,
    resizeMode: "contain",
  },
});
