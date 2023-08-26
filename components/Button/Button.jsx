import { Text, TouchableOpacity } from "react-native";
import { style } from "./Button.stylesheet";

export function Button({ unit, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={style.touchable}>
      <Text style={style.touchableText}>Convert To {unit}</Text>
    </TouchableOpacity>
  );
}
