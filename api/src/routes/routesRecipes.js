const { Router } = require('express');
const { getAllRecipes, getRecipesById, postRecipe, deleteRecipe } = require('../services/recipesServices')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers6
router.get('/:id', getRecipesById);
router.get('/', getAllRecipes);
router.post('/', postRecipe);
router.delete('/:id', deleteRecipe);


module.exports = router;
