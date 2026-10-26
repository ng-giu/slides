// ebd bn'b: the log in page (Lab 9)
// #region top
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../api/auth.js";

function LoginPage({ onLogIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const session = await login(email, password);
      onLogIn(session); // App remembers who logged in
      navigate("/");
    } catch (err) {
      setError(err.message); // the API's message
    }
  }
  // #endregion top

  // #region bottom
  return (
    <form className="page form" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      {error && <p className="error">{error}</p>}
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Log in</button>
      <p>No account yet? <Link to="/register">Register</Link></p>
    </form>
  );
}

export default LoginPage;
// #endregion bottom
