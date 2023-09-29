// const { DataTypes } = require('sequelize');

// // ID (Código de tres letras). *
// // Nombre. *
// // Imagen de la bandera. *
// // Continente. *
// // Capital. *
// // Subregión.
// // Área.
// // Población. *

// module.exports = (sequelize)=>{
//   sequelize.define('Country',{
//     id: {
//       type: DataTypes.STRING(3),
//       allowNull: false,
//       primaryKey: true,
//       unique: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique:true,
//     },
    
//     image: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
   
//     continents: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     capital: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//    subregion: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     area: {
//       type: DataTypes.INTEGER,
//     },
//     population: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
  
//   },
//   {timestamps: false, freezeTableName: true}
//   );
// };


const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      continents: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true, // Deshabilitar las marcas de tiempo "createdAt" y "updatedAt"
    }
  );
};