import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to our woodworking business!",
    description:
      "Explore our handcrafted products made with passion and precision.",
  });
});

export default router;
