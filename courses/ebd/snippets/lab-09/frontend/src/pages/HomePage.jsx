// ebd bn'b: a page of listing cards (Lab 9: all, or only mine)
// #region file
import ListingCard from "../components/ListingCard.jsx";

function HomePage({ listings, user, onDelete }) {
  if (listings.length === 0) {
    return <p className="page">No listings yet. Add one!</p>;
  }

  // One card per listing
  const cards = listings.map((listing) => (
    <ListingCard
      key={listing._id}
      listing={listing}
      user={user}
      onDelete={onDelete}
    />
  ));

  return <div className="listings">{cards}</div>;
}

export default HomePage;
// #endregion file
