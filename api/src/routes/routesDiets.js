const { Router } = require('express');
const { getAllDiets } = require('../services/dietsServices')

const router = Router();
router.use('/', getAllDiets);

module.exports = router;