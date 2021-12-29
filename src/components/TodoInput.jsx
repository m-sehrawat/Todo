import { useState } from "react";


export const TodoInput = ({ getData }) => {

    const [text, setText] = useState("");

    return (
        <div className="input-group appBox">
            <input onChange={(e) => setText(e.target.value)} className="form-control" type="text" placeholder="Type your task here" />
            <button onClick={() => getData(text)} className="btn btn-success">Add Task</button>
        </div>
    );
};