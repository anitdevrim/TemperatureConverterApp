import { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { style } from "./app.stylesheet";
import coldBackground from "./assets/cold.png";
import hotBackground from "./assets/hot.png";
import { converTemperatureTo, isCold, oppositeUnit } from "./calculations";
import { Button } from "./components/Button/Button";
import { Display } from "./components/Display/Display";
import { Input } from "./components/input/Input";

export default function App() {
  const [input, setInput] = useState();
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground, setCurrentBackground] = useState(hotBackground);

  useEffect(() => {
    if (isCold(input, currentUnit)) {
      setCurrentBackground(coldBackground);
    } else {
      setCurrentBackground(hotBackground);
    }
  }, [input, currentUnit]);
  return (
    <ImageBackground style={style.background} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
          <View style={style.workspace}>
            <Display
              unit={oppositeUnit(currentUnit)}
              temperature={converTemperatureTo(
                input,
                oppositeUnit(currentUnit)
              ).toFixed(2)}
            ></Display>
            <Input unit={currentUnit} onChange={setInput}></Input>
            <Button
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
              unit={currentUnit}
            ></Button>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
