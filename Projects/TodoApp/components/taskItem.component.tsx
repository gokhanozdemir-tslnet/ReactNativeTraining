import { AntDesign } from "@expo/vector-icons"
import { View, Text, StyleSheet, Button } from "react-native"
import { ITodo, TodoContextType } from "../types/task.type"
import { useContext } from "react"
import { TodosContext } from "../store/task.context"


type TaskItemProp = {
    task: ITodo
}

const TaskItem = ({ task }: TaskItemProp) => {

    const { deleteTodo, updateTodo } = useContext(TodosContext) as TodoContextType;

    return <View style={styles.item}>
        <View style={styles.taskIcon}>
            <AntDesign name="pushpin" size={24} color="white" />
        </View>
        <View style={styles.task}>
            <Text style={[styles.colorWhite, task.isDone && styles.textLine]}>{task.id.toString()}-{task.text}</Text>
        </View>
        <View style={styles.check}>
            <Button title="ok" onPress={() => updateTodo((Number)(task.id))} />
        </View>
        <View style={styles.check}>
            <Button title="X" onPress={() => deleteTodo((Number)(task.id))} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "orange",
        borderRadius: 10,
        // margin
    },
    task: {
        flex: 5,
        padding: 10,
        paddingLeft: 0,

    },
    taskIcon: {
        flex: 0.5,
        padding: 10,
        // backgroundColor: "red"
    },
    check: {
        flex: 1,
        padding: 10,
        alignItems: "center",

        // backgroundColor: "red"
    },
    colorWhite: {
        color: "white",

    },
    textLine: {
        textDecorationLine: "line-through"
    }
});

export default TaskItem;