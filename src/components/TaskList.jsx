import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));

    return onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const toggleCompleted = (task) => {
    updateDoc(doc(db, "tasks", task.id), {
      completed: !task.completed,
    });
  };

  const removeTask = (id) => {
    deleteDoc(doc(db, "tasks", id));
  };

  return (
    <div>
      {tasks.length === 0 && <p className="text-muted">No hay tareas aún.</p>}

      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <div className="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task)}
            />
            <span className={task.completed ? "task-done" : ""}>
              {task.title}
            </span>
          </div>

          <button className="btn-delete" onClick={() => removeTask(task.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
