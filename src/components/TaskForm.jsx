import { useState } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function TaskForm() {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    await addDoc(collection(db, "tasks"), {
      title: task.trim(),
      completed: false,
      createdAt: serverTimestamp(),
    });

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        className="form-control input-modern"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn-modern">Agregar</button>
    </form>
  );
}
