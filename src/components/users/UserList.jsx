import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function UserList({ onEdit }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "customUsers"), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "customUsers", id));
  };

  return (
    <div>
      <h4>Usuarios registrados</h4>

      {users.map((user) => (
        <div key={user.id} className="card p-2 mt-2 d-flex flex-row justify-content-between">
          <div>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </div>

          <div>
            <button className="btn btn-warning me-2" onClick={() => onEdit(user)}>
              Editar
            </button>
            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
