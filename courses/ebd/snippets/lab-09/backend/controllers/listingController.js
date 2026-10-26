// ebd bn'b: the listings controllers (Lab 9: owners)
// Read the request, call the model, send the response
import {
  getAllListings,
  getListingById,
  addListing,
  updateListing,
  removeListing,
} from "../models/Listing.js";

export async function handleGetAll(req, res) {
  res.json(await getAllListings());
}

export async function handleGetOne(req, res) {
  const listing = await getListingById(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
}

// #region create
export async function handleCreate(req, res) {
  const data = req.body || {}; // no body sent? use an empty object
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  const listing = await addListing({
    title: data.title,
    pricePerNight: data.pricePerNight,
    // The owner is whoever is logged in, never what the client says
    owner: req.user.id,
  });
  res.status(201).json(listing);
}
// #endregion create

// #region update
export async function handleUpdate(req, res) {
  const data = req.body || {};
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  const listing = await getListingById(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  // Logged in is not enough: it must be YOUR listing
  if (String(listing.owner) !== req.user.id) {
    return res.status(403).json({ error: "This is not your listing" });
  }
  const changes = { title: data.title, pricePerNight: data.pricePerNight };
  res.json(await updateListing(req.params.id, changes));
}
// #endregion update

// #region delete
export async function handleDelete(req, res) {
  const listing = await getListingById(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  // Logged in is not enough: it must be YOUR listing
  if (String(listing.owner) !== req.user.id) {
    return res.status(403).json({ error: "This is not your listing" });
  }
  await removeListing(req.params.id);
  res.status(204).end(); // done, nothing to send back
}
// #endregion delete
