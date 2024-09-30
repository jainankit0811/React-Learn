import { useState } from "react";

const TodoFrom = ({add}) => {
    const [text , setText]= useState("");
    return (
    <>
    <div className="todo-form">
        <h1>Add New Todo</h1>
        <input type="text" value={text} placeholder="Todo Task" />
        <button onClick={()=>add(text)}>Add Task</button>
    </div>
      
    </>
  );
}

export default TodoFrom;
