import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem({ item, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.goalItem}>{item}</Text>
    </Pressable>
  );
}

styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    color: "white",
  },
});
export default GoalItem;
