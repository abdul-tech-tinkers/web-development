import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let x=1;
  //x.toString();
  return (
    <View style={styles.container}>
      <Text>Hello, World from me</Text>
      <Button title="Button after the text" ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:"white",
  },
});
