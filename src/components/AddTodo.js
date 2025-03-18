import Modal from "./Modal";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../styles/addTodo.css";

function AddTodo({ onClose, open }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /* function to add new task to Firestore */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now(),
      });

      // Clear input fields after adding task
      setTitle("");
      setDescription("");

      // Close modal
      onClose();
    } catch (err) {
      alert("Error adding task: " + err.message);
    }
  };

  return (
    <Modal modalLable="Add Todo" onClose={onClose} open={open}>
      <form className="addTodo" name="addTodo" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder="Enter title"
          required
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          value={description}
          required
        ></textarea>
        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTodo;
