const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = async (sequelize) => {
  // defino el modelo
  await sequelize.define('recipe', {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type:DataTypes.STRING,
      allowNull:true
    },
    score :{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    healthScore :{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    steps :{
      type:DataTypes.JSON,
      allowNull:true
    },
    createdInDb:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }
  });
};
