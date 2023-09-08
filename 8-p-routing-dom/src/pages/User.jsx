import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello from user {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default User;