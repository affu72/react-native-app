import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler }) {
  const [input, setInput] = useState("");
  function goalInputHandler(enteredText) {
    setInput(enteredText);
  }
  return (
    <View style={styles.inputBox}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Type you goal here"
          onChangeText={goalInputHandler}
          value={input}
        />
      </View>
      <Button
        title="Tap to add"
        onPress={() => {
          setInput("");
          return addGoalHandler(input);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    flex: 1,
    marginBottom: 8,
  },
  inputWrapper: {
    width: "65%",
    borderWidth: 1,
    borderColor: "#1c1b1f",
    padding: 4,
    marginRight: 8,
  },
});
export default GoalInput;
