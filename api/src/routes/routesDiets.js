const { Router } = require('express');
const { getAllDiets } = require('../services/dietsServices')

const router = Router();
router.get('/', getAllDiets);

module.exports = router;