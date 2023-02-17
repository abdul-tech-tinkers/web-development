import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles";
export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goInputHandler = (enterText) => {
    setGoalText(enterText);
  };

  const onButtonClicked = () => {
    // recomended to updated the goal list array
    let goal = { text: goalText, key: Math.random().toString() };
    console.log(`adding new goal ${goal.key} ${goal.text}`);
    setGoalList((currentCourseGoals) => [...currentCourseGoals, goal]);
    setGoalText("");
  };

  return (
    <View style={AppStyles.appContainer}>
      <View style={AppStyles.inputContainer}>
        <TextInput
          value={goalText}
          onChangeText={goInputHandler}
          style={AppStyles.textInput}
          placeholder="Enter your goal"
        />
        <Button title="Add Goal" onPress={onButtonClicked} />
      </View>
      <View style={AppStyles.goalsContainer}>
        {/* <ScrollView>
          {goalList?.map((goal, index) => {
            return (
              <View style={AppStyles.goalItem} key={index}>
                <Text style={AppStyles.goalText}>{goal}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          data={goalList}
          renderItem={(goal) => {
            return (
              <View style={AppStyles.goalItem} key={goal.item.key}>
                <Text style={AppStyles.goalText}>{goal.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(goal) => goal.key}
        ></FlatList>
      </View>
    </View>
  );
}

const AppStyles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    padding: 8,
  },
  goalText: {
    color: "#fff",
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    marginRight: 5,
  },
  goalsContainer: {
    flex: 5,
  },
});
