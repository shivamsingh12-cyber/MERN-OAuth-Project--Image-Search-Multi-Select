const router = require("express").Router();
const passport = require('passport')
const Search = require("../model/Search");
const axios = require("axios");

// 🔹 POST /api/search — search Unsplash & save term
// 🔹 GET /api/search?term=nature
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { term } = req.body;

    if (!term) {
      return res.status(400).json({ message: "Search term is required" });
    }

    try {
      // 🔸 Save search term + userId in DB (from decoded JWT)
      await Search.create({
        userId: req.user._id,
        term,
        timestamp: new Date(),
      });

      // 🔸 Fetch images from Unsplash
    const unsplashRes = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=Ie1NNgj5kZwDxb7ika-ic3cGWzFaFSd5LCFb5LRjDWk`);

      res.json(unsplashRes.data.results);
    } catch (error) {
      console.error("Error saving term or fetching images:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.get("/top", async (req, res) => {
  try {
    const topSearches = await Search.aggregate([
      { $group: { _id: "$term", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);

    res.json({
      top: topSearches.map((t) => ({
        term: t._id,
        count: t.count,
      })),
    });
  } catch (error) {
    console.error("Error fetching top searches:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;