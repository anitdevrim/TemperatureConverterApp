import { Text } from "react-native";
import { style } from "./Display.stylesheet";
export function Display({ temperature, unit }) {
  return (
    <Text style={style.displayText}>
      {temperature} {unit}
    </Text>
  );
}
