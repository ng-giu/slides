// ebd bn'b: the app, its routes and its state (Lab 9)
// #region imports
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import AddListingPage from "./pages/AddListingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import {
  getListings,
  createListing,
  removeListing,
} from "./api/listings.js";
// #endregion imports

function App() {
  // #region load
  // Empty until the API answers
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Once, when the app starts: ask the API for the listings
  useEffect(() => {
    getListings()
      .then((data) => setListings(data))
      .catch(() => setError("Can't reach the API."))
      .finally(() => setLoading(false));
  }, []);

  // Runs after a render, whenever listings changes
  useEffect(() => {
    document.title = `ebd bn'b (${listings.length} listings)`;
  }, [listings]);
  // #endregion load

  // #region user
  // Who is logged in. Kept in the browser, so a reload keeps it
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  function logIn(session) {
    localStorage.setItem("token", session.token);
    localStorage.setItem("user", JSON.stringify(session.user));
    setUser(session.user);
  }

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }
  // #endregion user

  // #region change
  async function addListing(listing) {
    // The API saves it, and sends it back with its _id
    const saved = await createListing(listing);
    setListings([...listings, saved]);
  }

  async function deleteListing(id) {
    try {
      await removeListing(id); // gone from MongoDB
      setListings(listings.filter((l) => l._id !== id));
    } catch (err) {
      alert(`Could not delete it: ${err.message}`);
    }
  }
  // #endregion change

  // #region wait
  // Until the API answers, show only this
  if (loading) return <p className="page">Loading...</p>;
  if (error) return <p className="page error">{error}</p>;

  // Only the listings this user owns
  const mine = listings.filter((l) => user && l.owner === user.id);
  // #endregion wait

  // #region routes
  return (
    <main>
      <Header user={user} onLogOut={logOut} />
      <Routes>
        <Route path="/" element={<HomePage listings={listings} user={user} onDelete={deleteListing} />} />
        <Route path="/mine" element={<HomePage listings={mine} user={user} onDelete={deleteListing} />} />
        <Route path="/listings/:id" element={<ListingPage listings={listings} />} />
        <Route path="/add" element={user ? <AddListingPage onAdd={addListing} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogIn={logIn} />} />
        <Route path="/register" element={<RegisterPage onLogIn={logIn} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
// #endregion routes
