// ebd bn'b: the whole page, built from components (Lab 6)
// #region imports
import Header from "./components/Header.jsx";
import ListingCard from "./components/ListingCard.jsx";
import listings from "./data/listings.js";
// #endregion imports

function App() {
  // #region cards
  // One card per listing
  const cards = listings.map((listing) => (
    <ListingCard key={listing._id} listing={listing} />
  ));
  // #endregion cards

  return (
    <main>
      <Header />
      <div className="listings">{cards}</div>
    </main>
  );
}

export default App;
