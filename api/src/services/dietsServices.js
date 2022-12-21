const { allDiets } = require("./controllers");

const getAllDiets = async (req, res) => {
    try {
        const diets = await allDiets();
        res.status(200).json(diets);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllDiets
};