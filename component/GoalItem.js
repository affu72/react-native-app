import { StyleSheet, Text, Pressable,View } from "react-native";

function GoalItem({ item, onPress }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onPress(item.id)}
        style={(pressedData)=> pressedData.pressed&&styles.pressedItem} // for iOS
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    color: "white",
  },

  pressedItem: {
    color: "black",
  },

  goalText: {
    padding: 8,
    color:'white'
  },


});
export default GoalItem;
