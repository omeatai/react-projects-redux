import { useState } from "react";
import { data } from "../data";

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    if (!name || !email) {
      console.log("Please enter a name and email");
      alert("Please enter a name and email");
      return;
    }

    const lastUserId = users[users.length - 1].id;
    const newUserId = new Date().getTime() || lastUserId;
    const newUser = { id: newUserId, name, email };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
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
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
