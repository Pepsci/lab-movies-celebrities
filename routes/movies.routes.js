const expres = require("express");
const router = require("express").Router();
const MovieModel = require("../models/Movie.model");
const CelebrityModel = require("../models/Celebrity.model");

//GET movie page
router.get("/", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies/movies", { movies });
  } catch (error) {
    next(error);
  }
});

//GET new movie page
router.get("/create", (req, res, next) => {
  res.render("movies/new-movie");
});

// //GET new movie page form
router.get("/create", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    res.render("movies/new-movie", { celebrities });
  } catch (error) {
    console.log(error);
  }
});

// POST new movie form
router.post("/create", async (req, res, next) => {
  try {
    await MovieModel.create(req.body);
    res.redirect("/movies");
  } catch (error) {
    next(error), console.error(error);
  }
});

module.exports = router;
