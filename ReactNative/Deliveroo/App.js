import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen.js";
import RestaurentScreen from "./components/RestaurentScreen.js";
import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RestaurentScreen" component={RestaurentScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
