import { Button, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import { useContext, useState } from "react";
import { TodosContext } from "../store/task.context";
import { ITodo, TodoContextType } from "../types/task.type";
import { useTranslation } from "react-i18next";


const TaskInputPanel = () => {
    const { t, i18n } = useTranslation();
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

    return (<>
        <View style={styles.languageChangerPanel}>
            <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
                <Text>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => i18n.changeLanguage("tr")}>
                <Text>Türkçe</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.inputPanel}>
            <View style={styles.inputPanel_input}>
                <TextInput
                    style={styles.textWhite}
                    placeholder="Enter a taskh"
                    placeholderTextColor="gray"
                    value={item}
                    onChangeText={textChange}
                ></TextInput>
            </View>
            <View style={styles.inputPanel_button}>
                <Button title={t("screens.intro.text.add")} onPress={addTask}></Button>
            </View>
        </View>
    </>);

};

const styles = StyleSheet.create({
    languageChangerPanel: {
        backgroundColor: "white",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingEnd: 15,
        padding: 15
    },
    languageButtons: {

    },
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