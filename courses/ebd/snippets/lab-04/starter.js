// #region top
// ebd bn'b: the listings API
// We build this in Lab 4. Try it before then!

// 1. Import express and create an app

// ========== MIDDLEWARE ==========
// 2. Read JSON request bodies (express.json)

// ========== DATABASE ==========
// 3. A "listings" array of rental properties,
//    each with an id, title and pricePerNight

// ========== MODEL ==========
// 4. Functions that are the ONLY code
//    allowed to touch the array:
//    getAllListings()
//    getListingById(id)
//    addListing(data)
//    updateListing(id, data)
//    removeListing(id)
// #endregion top

// #region bottom
// ========== CONTROLLERS ==========
// 5. Read the request, call the model,
//    send the response:
//    handleGetAll -> 200 + all listings
//    handleGetOne -> 200 + listing, or 404
//    handleCreate -> 201 + new listing, or 400
//    handleUpdate -> 200 + listing, or 400/404
//    handleDelete -> 204 (no body), or 404

// ========== ROUTES ==========
// 6. Connect each method + URL to a controller
//    GET    "/api/listings"
//    GET    "/api/listings/:id"
//    POST   "/api/listings"
//    PUT    "/api/listings/:id"
//    DELETE "/api/listings/:id"

// ========== START ==========
// 7. Start the server on port 3000
// #endregion bottom
