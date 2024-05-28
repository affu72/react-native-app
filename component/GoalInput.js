import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler, closeModal,isModalOpen }) {
  const [input, setInput] = useState("");
  function goalInputHandler(enteredText) {
    setInput(enteredText);
  }
  return (
    <Modal animationType="slide" visible={isModalOpen}>
      <View style={styles.inputBox}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={{color:"white"}}
            placeholder="Type you goal here"
            onChangeText={goalInputHandler}
            value={input}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title="Tap to add"
            onPress={() => {
              setInput("");
              addGoalHandler(input);
              closeModal();
            }}
          />
          <Button title="Close" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    alignItems: "center",
    justifyContent:"center",
    // borderBottomWidth: 1,
    // borderBottomColor: "#000",
    backgroundColor: '#555',
    // height:180,
    // marginTop: 'auto',
    // borderWidth: 1,
    // borderColor:'red'
    flex:1
  },
  inputWrapper: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 16,
    padding: 8,
    color:'#fff',
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-around",
    // flexGrow: 1,
    alignItems:"center"
  },

  modal: {
    maxHeight: '20%',
    zIndex:2,
    borderWidth: 1,
    borderColor:'red'
  }
});
export default GoalInput;
