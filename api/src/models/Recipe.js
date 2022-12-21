const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate:{
        min:0,
        max:100,
        isNumber(value){
          if(isNaN(value)) throw new Error('healthScore must be a number')
        }
      }
    },
    stepByStep: {
      type: DataTypes.ARRAY(DataTypes.STRING(5000))
    },
    image: {
      type: DataTypes.STRING,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    timestamps: false
  });
};

// API: https://api.spoonacular.com/recipes/complexSearch?apiKey=fd0c2b1fa8d54335942fe50414d1d435
// Para obtener mayor información sobre las recetas, como por ejemplo el tipo de dieta: https://api.spoonacular.com/recipes/complexSearch?apiKey=fd0c2b1fa8d54335942fe50414d1d435&addRecipeInformation=true
