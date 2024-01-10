import { useState } from "react";
import { data } from "../data";

const FormExample = () => {
  const INITIAL_USER = {
    name: "",
    email: "",
    password: "",
  };
  const [users, setUsers] = useState(data);
  const [user, setUser] = useState(INITIAL_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (!user.name || !user.email || !user.password) {
      console.log("Please enter a name, email and password.");
      alert("Please enter a name, email and password.");
      return;
    }

    const lastUserId = users[users.length - 1].id;
    // const newUserId = new Date().getTime() || lastUserId;
    const newUser = { id: lastUserId + 1, ...user };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setUser(INITIAL_USER);
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users */}
      <h2>users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>
              <span>{user.id}-</span>
              {user.name}
              <span> {user?.email && `(${user?.email})`} </span>
            </h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
      <hr style={{ margin: "2rem 0" }} />
    </div>
  );
};

export default FormExample;
