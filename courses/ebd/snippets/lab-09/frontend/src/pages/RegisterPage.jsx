// ebd bn'b: the register page (Lab 9)
// #region top
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { register } from "../api/auth.js";

function RegisterPage({ onLogIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // Registering logs you in too: the API sends a token
      const session = await register(name, email, password);
      onLogIn(session);
      navigate("/");
    } catch (err) {
      setError(err.message); // the API's message
    }
  }
  // #endregion top

  // #region bottom
  return (
    <form className="page form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <label htmlFor="name">Name</label>
      <input id="name" value={name} required onChange={(e) => setName(e.target.value)} />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
      <p>Already registered? <Link to="/login">Log in</Link></p>
    </form>
  );
}

export default RegisterPage;
// #endregion bottom
