import { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  function addGoalHandler(input) {
    setGoals((goal) => [
      // { text: input, key: Math.random().toString() },
      { text: input, id: Math.random().toString() },
      ...goal,
    ]);
  }

  function deleteHandler(id) {
    // console.log("delete");
    setGoals((goal) => goal.filter((goalItem) => goalItem.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalContainer}>
        {/* <ScrollView StickyHeaderComponent stickyHeaderIndices={1}>
          {goals.map((goal) => (
            <Text key={goal} style={styles.goalItem}>
              {goal}
            </Text>
          ))}
        </ScrollView> */}

        <FlatList
          data={goals}
          renderItem={(itemData) => {
            // itemData.index
            // itemData.separators
            // return <Text style={styles.goalItem}>{itemData.item.text}</Text>; // in their own file
            return <GoalItem item={itemData.item} onPress={deleteHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },

  goalContainer: {
    flex: 5,
    // borderWidth: 1,
    // borderColor: "red",
  },
  // goalItem: {
  //   margin: 8,
  //   padding: 8,
  //   borderRadius: 6,
  //   backgroundColor: "#5e08cc",
  //   color: "white",
  // },
  //(in their file)
});
