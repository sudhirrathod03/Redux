import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice.js";

function Users() {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector((state) => state.users);
  return (
    <div>
      <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
     <ul>
     {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
     </ul>
    </div>
  );
}

export default Users;
