const data = require('../../../../data');

module.exports = {
    show(req, res) {
        const recipes = data;
        const recipeIndex = req.params.index;
            if(!recipes[recipeIndex]) {
                return res.send("Recipe not found!")
            }

        return res.render("main/recipes", { recipes: recipes[recipeIndex] });
    }
}