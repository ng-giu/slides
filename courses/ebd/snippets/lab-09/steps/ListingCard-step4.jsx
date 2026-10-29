// ebd bn'b: ListingCard.jsx after Step 4 (Lab 9)
// #region file
import { useState } from "react";
import { Link } from "react-router";

function ListingCard({ listing, user, onDelete }) {
  const [saved, setSaved] = useState(false);
  // Logged out? No Delete button
  const canDelete = user;

  return (
    <div className="card">
      <h2>
        <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
      </h2>
      <p>{listing.pricePerNight} per night</p>
      <button onClick={() => setSaved(!saved)}>{saved ? "♥ Saved" : "♡ Save"}</button>
      {canDelete && <button onClick={() => onDelete(listing._id)}>Delete</button>}
    </div>
  );
}

export default ListingCard;
// #endregion file
