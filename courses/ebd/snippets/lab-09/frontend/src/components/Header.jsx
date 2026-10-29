// ebd bn'b: the header, with who is logged in (Lab 9)
// #region file
import { Link } from "react-router";

function Header({ user, onLogOut }) {
  return (
    <header className="header">
      <h1>ebd bn'b</h1>
      <p>Places to stay, all over Egypt</p>
      <nav>
        <Link to="/">All listings</Link>
        {user ? (
          <>
            <Link to="/mine">My listings</Link>
            <Link to="/add">Add a listing</Link>
            <span>Hi, {user.name}</span>
            <button onClick={onLogOut}>Log out</button>
          </>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
export default Header;
// #endregion file
