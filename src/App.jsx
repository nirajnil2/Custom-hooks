//import React, { useEffect, useState } from "react";
//import axios from "axios";
import useIsonline from "./hooks/useisonline";

// Custom Hook
/* function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = () => {
      axios
        .get("https://dummyjson.com/todos")
        .then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };

    fetchTodos(); // Initial fetch

    const intervalId = setInterval(fetchTodos, n * 1000); // Fetch every n seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [n]);

  return [todos, loading];
} */
// Main App Component
function App() {
  const isonline = useIsonline();
  if(isonline){
    return "Your are  online  yay! ";
  }
  return "Your are offline ";
  /* const [todos, loading] = useTodos(5);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <>
       {todos.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))} 
      
    </>
  ); */
}

// Track Component to display individual todo
function Track({ todo }) {
  return (
    <div>
      <strong>Todo:</strong> {todo.todo} | <strong>Completed:</strong>{" "}
      {todo.completed ? "Yes" : "No"}
      <br />
    </div>
  );
}

export default App;

