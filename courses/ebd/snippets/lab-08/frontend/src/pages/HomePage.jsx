// ebd bn'b: the home page, every listing as a card (Lab 8)
// #region file
import ListingCard from "../components/ListingCard.jsx";

function HomePage({ listings, onDelete }) {
  if (listings.length === 0) {
    return <p className="page">No listings yet. Add one!</p>;
  }

  // One card per listing
  const cards = listings.map((listing) => (
    <ListingCard
      key={listing._id}
      listing={listing}
      onDelete={onDelete}
    />
  ));

  return <div className="listings">{cards}</div>;
}

export default HomePage;
// #endregion file
