// ebd bn'b: HomePage.jsx in Steps 2 to 4 (Lab 7)
// #region file
import ListingCard from "../components/ListingCard.jsx";

function HomePage({ listings }) {
  // One card per listing
  const cards = listings.map((listing) => (
    <ListingCard key={listing._id} listing={listing} />
  ));

  return <div className="listings">{cards}</div>;
}

export default HomePage;
// #endregion file
