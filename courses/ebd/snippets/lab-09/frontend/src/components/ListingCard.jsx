// ebd bn'b: one listing, as a card (Lab 9: Delete for the owner only)
// #region file
import { useState } from "react";
import { Link } from "react-router";

function ListingCard({ listing, user, onDelete }) {
  const [saved, setSaved] = useState(false);
  // Only the listing's owner may delete it
  const isMine = user && listing.owner === user.id;

  return (
    <div className="card">
      <h2>
        <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
      </h2>
      <p>{listing.pricePerNight} per night</p>
      <button onClick={() => setSaved(!saved)}>{saved ? "♥ Saved" : "♡ Save"}</button>
      {isMine && <button onClick={() => onDelete(listing._id)}>Delete</button>}
    </div>
  );
}

export default ListingCard;
// #endregion file
