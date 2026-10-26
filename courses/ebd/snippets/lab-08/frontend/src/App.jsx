// ebd bn'b: the app, its routes and its state (Lab 8)
// #region imports
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import AddListingPage from "./pages/AddListingPage.jsx";
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

  // #region change
  async function addListing(listing) {
    // The API saves it, and sends it back with its _id
    const saved = await createListing(listing);
    setListings([...listings, saved]);
  }

  async function deleteListing(id) {
    await removeListing(id); // gone from MongoDB
    setListings(listings.filter((l) => l._id !== id));
  }
  // #endregion change

  // #region wait
  // Until the API answers, show only this
  if (loading) return <p className="page">Loading...</p>;
  if (error) return <p className="page error">{error}</p>;
  // #endregion wait

  // #region routes
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage listings={listings} onDelete={deleteListing} />} />
        <Route path="/listings/:id" element={<ListingPage listings={listings} />} />
        <Route path="/add" element={<AddListingPage onAdd={addListing} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
// #endregion routes
