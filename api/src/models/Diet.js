const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = async (sequelize) => {
  // defino el modelo
 await sequelize.define('diet', {
      name: {
        type: DataTypes.STRING,
        allowNull:false
      }
  });
};
