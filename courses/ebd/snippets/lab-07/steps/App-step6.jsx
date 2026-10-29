// ebd bn'b: App.jsx after Step 6 (Lab 7)
// #region imports
import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import AddListingPage from "./pages/AddListingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import initialListings from "./data/listings.js";
// #endregion imports

function App() {
  // #region state
  // App remembers the listings, and gives them to pages
  const [listings, setListings] = useState(initialListings);

  function addListing(listing) {
    // A new array: all the listings, then the new one
    setListings([...listings, listing]);
  }

  function deleteListing(id) {
    // A new array: all the listings but that one
    setListings(listings.filter((l) => l._id !== id));
  }
  // #endregion state

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
