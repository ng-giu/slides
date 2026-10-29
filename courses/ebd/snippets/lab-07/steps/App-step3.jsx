// ebd bn'b: App.jsx after Step 3 (Lab 7)
// #region imports
import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import initialListings from "./data/listings.js";
// #endregion imports

function App() {
  // #region state
  // App remembers the listings, and gives them to pages
  const [listings, setListings] = useState(initialListings);
  // #endregion state

  // #region routes
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage listings={listings} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
// #endregion routes
