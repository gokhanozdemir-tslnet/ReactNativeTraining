import { AntDesign } from "@expo/vector-icons"
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import { ITodo, TodoContextType } from "../types/task.type"
import { useContext } from "react"
import { TodosContext } from "../store/task.context"
import React from "react"


type TaskItemProp = {
    key: number,
    task: ITodo
}

const TaskItem = ({ key, task }: TaskItemProp) => {

    const { deleteTodo, updateTodo } = useContext(TodosContext) as TodoContextType;

    return <View style={styles.item} key={key}>
        <View style={styles.taskIcon}>
            <AntDesign name="pushpin" size={24} color="white" />
        </View>
        <View style={styles.task}>
            <Text style={[styles.colorWhite, task.isDone && styles.textLine]}>{task.id.toString()}-{task.text}</Text>
        </View>
        <View style={styles.check}>
            {/* <TouchableOpacity onPress={() => updateTodo((Number)(task.id))}>
                <Text>Ok</Text>
            </TouchableOpacity> */}
        </View>
        <View style={styles.check}>
            <TouchableOpacity style={{ backgroundColor: "green", margin: 5 }} onPress={() => updateTodo((Number)(task.id))}>
                <AntDesign name="check" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "red", margin: 5 }} onPress={() => deleteTodo((Number)(task.id))}>
                <AntDesign name="delete" size={16} color="white" />
            </TouchableOpacity>
            {/* <Button title="X" onPress={() => deleteTodo((Number)(task.id))} /> */}
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
        flexDirection: "row"

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