import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  touchable: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  touchableText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
});
