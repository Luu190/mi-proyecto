import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default function UserManager() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <h2 className="mb-3">Gestión de Usuarios (CRUD)</h2>

      <UserForm
        selectedUser={selectedUser}
        clearSelection={() => setSelectedUser(null)}
      />

      <UserList onEdit={(user) => setSelectedUser(user)} />
    </div>
  );
}
