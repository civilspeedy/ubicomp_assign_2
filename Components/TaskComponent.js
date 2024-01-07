import React, { useState } from "react";
import { StyleSheet, View, Pressable, Alert, Text } from "react-native";
import { globalColours, smoothExpansionAnimation } from "../Styling/GlobalStyles";
import { impactAsync } from "expo-haptics";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteTask, setTaskDone } from "../Logic/Database/DatabaseManipulation";
import EditModal from "./EditModalComponent";

export default function TaskComponent({ task, fetchTasks }) {
  const [isExtended, setExtended] = useState(false);
  // https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/long-press-gesture

  const whenLongPress = Gesture.LongPress().onEnd((e, success) => {
    smoothExpansionAnimation();
    impactAsync();
    setExtended(!isExtended);
  });

  const promptDeleteTask = () => {
    Alert.alert("Delete Task?", "Are you sure you want to delete this Task?", [
      { text: "No" },
      {
        text: "yes",
        onPress: () => {
          deleteTask(task.title);
          fetchTasks();
        },
      },
    ]);
  };

  const doneTask = () => {
    setTaskDone(task, true);
    fetchTasks();
  };

  return (
    <View style={styles.container}>
      <GestureDetector
        gesture={whenLongPress}
        shouldCancelWhenOutside={true}
        onPressOut={() => impactAsync()}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          {!isExtended && (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.textWrapper}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskStatText}>{task.due}</Text>
              </View>

              <Pressable style={styles.doneButton} onPress={doneTask}>
                <MaterialCommunityIcons name='check' size={70} />
              </Pressable>
            </View>
          )}
        </View>
      </GestureDetector>
      {isExtended && (
        <View style={{ flex: 1 }}>
          <EditModal task={task} fetchTasks={fetchTasks} />

          <Pressable style={styles.deleteButton} onPress={promptDeleteTask}>
            <MaterialCommunityIcons
              name='delete-outline'
              size={70}
              style={{ alignSelf: "center" }}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColours.backgroundSecondary,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: "row",
    borderRadius: 20,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 10,
    width: 70,
    height: 70,
  },
  doneButton: {
    backgroundColor: globalColours.tertiary,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
    width: 70,
    height: 70,
  },
  taskTitle: {
    color: globalColours.secondary,
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
  taskStatText: {
    fontSize: 15,
    alignSelf: "center",
  },
  textWrapper: {
    backgroundColor: globalColours.backgroundSecondary,
    padding: 10,
    flex: 1,
    borderRadius: 20,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  titleContainer: {
    alignSelf: "center",
    backgroundColor: globalColours.tertiary,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  formatContainer: {
    alignSelf: "center",
    backgroundColor: globalColours.tertiary,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
