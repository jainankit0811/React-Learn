import { useEffect } from "react";
import { useState } from "react";
import Navebar from "../../counter-app/src/components/Navebar";
import TodoFrom from "../../counter-app/src/components/TodoFrom";

const App = () => {
  const [Todo, setTodo] = useState([]);

  // Getting Stored Todos from localStorage 
  useEffect(()=>{
    const sortTodo = JSON.parse(localStorage,getItem("todos")) || [];
    setTodo(storedTodos);
  },[])

  // add task functionality
  const addTask = (text)=>{
    console.log("ADD TASK FUNCTION")
  }

  // delete task functionality
  const deleteTask = ()=>{
    console.log("DELETE TASK FUNCTION")
  }
  return (
    <>
    <Navebar/>
    <TodoFrom add={addTask}/>

    </>
  );
}

export default App;
