import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem({ item, onPress }) {
  return (
    <Pressable
      android_ripple={{ color: "yellow" }}
      onPress={() => onPress(item.id)}
      // style={(pressed) => pressed.pressed && styles.pressedItem} // for iOS
    >
      <Text style={styles.goalItem}>{item.text}</Text>
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

  pressedItem: {
    color: "black",
  },
});
export default GoalItem;
