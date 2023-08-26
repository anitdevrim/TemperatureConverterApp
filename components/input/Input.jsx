import { Text, TextInput, View } from "react-native";
import { style } from "./Input.stylesheet";

export function Input({ onChange, unit }) {
  return (
    <View style={style.view1}>
      <TextInput
        style={style.input}
        maxLength={4}
        placeholder="Type the temperature"
        onChangeText={function (text) {
          onChange(text);
        }}
      ></TextInput>
      <Text style={style.unit}>{unit}</Text>
    </View>
  );
}
