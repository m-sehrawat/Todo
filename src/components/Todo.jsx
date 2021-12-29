import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";


export const Todo = () => {

    const [task, setTask] = useState([]);

    const handleAddTask = (text) => {
        const payload = {
            title: text,
            status: false,
            id: nanoid(12)
        };
        setTask([...task, payload]);
    };

    return (
        <div>

            <TodoInput getData={handleAddTask} />

            {task.map((item) => <TodoList {...item} key={item.id} />)}

        </div>
    );
};