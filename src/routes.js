const express = require('express');
const routes = express.Router();

const mainController = require('./app/controllers/main/mainController');
const recipesController = require('./app/controllers/admins/recipesController');
const data = require('../data');

routes.get("/", function(req, res)  {
    return res.redirect("/home");
});

routes.get("/home", function(req, res)  {
    return res.render("main/home", { recipes: data });
});

routes.get("/about", function(req, res)  {
    return res.render("main/about");
});

routes.get("/recipesList", function(req, res) {
    return res.render("main/recipesList", { recipes: data });
});

routes.get("/recipes/:index", mainController.show);

routes.get("/admin/recipes", recipesController.index);
routes.get("/admin/recipes/create", recipesController.create);

routes.post("/admin/recipes", recipesController.post);


module.exports = routes;