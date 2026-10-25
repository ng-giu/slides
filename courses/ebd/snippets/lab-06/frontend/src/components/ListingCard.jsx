// ebd bn'b: one listing, as a card (Lab 6)
// #region file
import { useState } from "react";

function ListingCard({ listing }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card">
      <h2>{listing.title}</h2>
      <p>{listing.pricePerNight} per night</p>
      <button onClick={() => setSaved(!saved)}>
        {saved ? "♥ Saved" : "♡ Save"}
      </button>
    </div>
  );
}

export default ListingCard;
// #endregion file
