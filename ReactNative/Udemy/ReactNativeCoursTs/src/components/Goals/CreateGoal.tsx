import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";
import { useState } from "react";
import { ICreateGoalHandler } from "../../interfaces/ICreateGoalHandler";
import { IGoal } from "../../interfaces/IGoal";

const CreateGoal: React.FC<ICreateGoalHandler> = ({
  isCreateGoalModelVisible,
  onGoalCreated,
}) => {
  const [goalText, setGoalText] = useState<string>("");
  const onCreateGoalTextChanged = (enterText: string): void => {
    setGoalText(enterText);
  };
  const onGoalsButtonClicked = () => {
    debugger;
    let goal: IGoal = { text: goalText, id: Math.random().toString() };
    console.log(goal);
    onGoalCreated(goal);
    setGoalText("");
  };
  return (
    <View style={AppStyles.inputContainer}>
      <TextInput
        placeholderTextColor="#000"
        value={goalText}
        onChangeText={onCreateGoalTextChanged}
        style={AppStyles.textInput}
        placeholder="Enter your goal"
      />
      <View style={AppStyles.buttonStyle}>
        <View style={{ marginRight: 15 }}>
          <Button
            title="Add Goal"
            color="#5e0a5c"
            onPress={onGoalsButtonClicked}
          />
        </View>
        <Button title="Cancel" onPress={onGoalsButtonClicked} />
      </View>
    </View>
  );
};

export default CreateGoal;
const AppStyles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "transparent",
  },
  textInput: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    margin: 5,
  },
});
