import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/AddUser/UsersList";
import React, { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={[usersList]}></UserList>
    </div>
  );
}

export default App;
