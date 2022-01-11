const express = require("express");
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");

//get celebrtities page
router.get("/", async (req, res, next) => {
  try {
    res.render("celebrities/celebrities", {
      celebrities: await CelebrityModel.find(),
    });
  } catch (error) {
    next(error);
  }
});

// GET new-celebrity page
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

//POST new celebrity form
router.post("/create", async (req, res, next) => {
  try {
    await CelebrityModel.create(req.body);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
