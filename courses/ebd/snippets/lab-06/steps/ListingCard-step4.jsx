// ebd bn'b: ListingCard after Step 4, props only (Lab 6)
// #region file
function ListingCard({ listing }) {
  return (
    <div className="card">
      <h2>{listing.title}</h2>
      <p>{listing.pricePerNight} per night</p>
    </div>
  );
}

export default ListingCard;
// #endregion file
