import { ScrollView, StyleSheet, View } from "react-native"
import TaskItem from "./taskItem.component";
import { useContext } from "react";
import { TodosContext } from "../store/task.context";
import { TodoContextType } from "../types/task.type";






const TaskList = () => {

    const { todos } = useContext(TodosContext) as TodoContextType;

    console.log(todos);

    return <ScrollView style={styles.listPanel}>
        <View style={styles.listPanelContainer}>
            {todos.map(task => <TaskItem task={task} />)}
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    listPanel: {
        backgroundColor: "gray",
        flex: 1,
        gap: 50,
        width: "100%",
        height: "100%",
        borderRadius: 10,
        padding: 10,
        flexDirection: "column"
    },
    listPanelContainer: {
        gap: 2
    }
});

export default TaskList;