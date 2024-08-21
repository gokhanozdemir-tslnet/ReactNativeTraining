import { Button, StyleSheet, TextInput, View } from "react-native";
import { useContext, useState } from "react";
import { TodosContext } from "../store/task.context";
import { ITodo, TodoContextType } from "../types/task.type";

const TaskInputPanel = () => {
    const [item, setItem] = useState("");
    const { todos, saveTodo, updateTodo } = useContext(TodosContext) as TodoContextType;
    const addTask = () => {
        const todo: ITodo = { id: todos.length + 1, text: item, isDone: false };
        console.log(todo)
        saveTodo(todo);
        setItem("");
    }
    const textChange = (text) => {
        console.log(text)
        setItem(text);
    }

    return (
        <View style={styles.inputPanel}>
            <View style={styles.inputPanel_input}>
                <TextInput
                    style={styles.textWhite}
                    placeholder="Enter a task"
                    placeholderTextColor="gray"
                    value={item}
                    onChangeText={textChange}
                ></TextInput>
            </View>
            <View style={styles.inputPanel_button}>
                <Button title="Add" onPress={addTask}></Button>
            </View>
        </View>);

};

const styles = StyleSheet.create({

    inputPanel: {
        backgroundColor: "blue",
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        padding: 2,
        paddingLeft: 10,
        borderRadius: 10,
    },
    inputPanel_input: {
        flex: 3,
    },
    textWhite: {
        color: "white",
    },
    inputPanel_button: {
        flex: 1,
        borderRadius: 10,
    },

});


export default TaskInputPanel;