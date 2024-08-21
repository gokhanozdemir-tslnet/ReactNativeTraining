
export type TaskItemType = {
    id: Number;
    text: String;
    isDone: Boolean
};


export type TaskItemListType = Array<TaskItemType>;


export type TaskItemListContextType = {
    taskItems: TaskItemListType,
    setTaskItems: () => null
}


export interface ITodo {
    id: Number;
    text: String;
    isDone: Boolean
}

export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    // deleteTodo: (id: number) => void;
};