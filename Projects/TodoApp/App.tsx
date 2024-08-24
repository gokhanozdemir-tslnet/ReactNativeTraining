import React from "react";
import { StyleSheet, View } from "react-native";
import TaskList from "./components/taskList.component";
import TaskInputPanel from "./components/taskInputPanel.component";
import TodosProvider from "./store/task.context";
import "./localization/i18n";

export default function App() {
  return (
    <TodosProvider>
      <View style={styles.container}>
        <TaskInputPanel />
        <TaskList />
      </View>
    </TodosProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 0,
    gap: 5,
  },
});

/*
<LinearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.button}
      >
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>

*/
