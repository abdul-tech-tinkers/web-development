import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import CreateGoal from "./src/components/Goals/CreateGoal";
import GoalComponent from "./src/components/Goals/Goal";
import { IGoal } from "./src/interfaces/IGoal";
export default function App() {
  const [goalList, setGoalList] = useState<IGoal[]>([]);
  const [createGoalModelVisible, setCreateGoalModalVisible] = useState(false);

  const onGoalCreated = (goal: IGoal) => {
    setGoalList([...goalList, goal]);
  };

  const onCreateGoalHandler = () => {
    setCreateGoalModalVisible(true);
  };

  return (
    <View style={AppStyles.appContainer}>
      {/* <Button title="new goal" onPress={onCreateGoalHandler} /> */}
      <CreateGoal
        onGoalCreated={onGoalCreated}
        isCreateGoalModelVisible={createGoalModelVisible}
      />
      <View style={AppStyles.goalsContainer}>
        <FlatList
          key={goalList.length}
          data={goalList}
          renderItem={(item) => {
            let goal: IGoal = item.item;
            return <GoalComponent id={goal.id} text={goal.text} />;
          }}
          keyExtractor={(goal) => goal.id}
        ></FlatList>
      </View>
    </View>
  );
}

const AppStyles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
