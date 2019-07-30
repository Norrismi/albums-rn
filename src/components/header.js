import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Albums!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  viewStyle: {
    height: 50,
    width: "95%",
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center'
  },

  textStyle: {
    color: "red",
    textAlign: 'center',
  }
});
