import "../styles/title.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // Ensure this is correctly set up

function Title() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Function to get all tasks from Firestore in real-time
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("Fetched tasks:", querySnapshot.docs.map(doc => doc.data())); // Debug log
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })));
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <div className="title">
      <header>Todo App</header>
      <div className="title__container">
        <button onClick={() => setOpenAddModal(true)}>New Task +</button>
        <div className="title__todos">
          {tasks.map((todo) => (
            <TodoList
              id={todo.id}
              key={todo.id}
              completed={todo.data.completed}
              title={todo.data.title}
              description={todo.data.description}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTodo onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default Title;
