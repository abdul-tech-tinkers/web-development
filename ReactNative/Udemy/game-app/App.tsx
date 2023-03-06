import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

const App = () => {
  return (
    //@ts-ignore

    <View>
      <StartGameScreen />
    </View>
  );
};

export default App;
