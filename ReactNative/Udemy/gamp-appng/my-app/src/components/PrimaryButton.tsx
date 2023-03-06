import { View, Text } from "react-native";
import React from "react";
import { PrimaryButtonModal } from "../interfaces/primarybutton.modal";

const PrimaryButton: React.FC<PrimaryButtonModal> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
