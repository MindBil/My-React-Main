import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API, userData);
    
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to create user");
    }
  } catch (error) {
    throw new Error("Failed to create user: " + error.message);
  }
};

//


fetchUsers()
  .then((users) => {
    console.log("Fetched users:", users);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });


const newUser = {
  name: "Jonas Jonaitis",
  email: "jonas@jonaitis.com",

};

createUser(newUser)
  .then((createdUser) => {
    console.log("Successfully created user:", createdUser);
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });
