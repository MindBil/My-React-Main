import { useState, useEffect } from "react";
import { fetchUsers, createUser } from "./api/user";

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetchUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newUser)
      .then((createdUser) => {
        setUsers([...users, createdUser]);
        setNewUser({
          name: "",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
  );
}

export default UserList;
