import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IGoal } from "../../interfaces/IGoal";

const GoalComponent: React.FC<IGoal> = (goal) => {
  return (
    <View key={goal.id}>
      <View style={AppStyles.goalItem}>
        <Text style={AppStyles.goalText}>{goal.text}</Text>
      </View>
    </View>
  );
};

export default GoalComponent;

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
});
