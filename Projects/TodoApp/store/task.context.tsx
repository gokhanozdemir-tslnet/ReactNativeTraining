import { createContext, ReactNode, useState } from "react"
import { ITodo, TodoContextType } from "../types/task.type";


export const TodosContext = createContext<TodoContextType | null>(null);

const TodosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: todo.id, // not really unique - but fine for this example
            text: todo.text,
            isDone: false,
        };
        setTodos([...todos, newTodo]);
    };
    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.isDone = true;
                setTodos([...todos]);
            }
        });
    };

    const deleteTodo = (id: number) => {
        const filteredTodo = todos.filter(x => x.id !== id);
        setTodos(filteredTodo);
    };

    return <TodosContext.Provider value={{ todos, saveTodo, updateTodo, deleteTodo }}>{children}</TodosContext.Provider>;
};

export default TodosProvider;