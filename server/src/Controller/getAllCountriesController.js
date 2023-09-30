
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

// Importa el objeto Op de Sequelize para utilizar operadores en las consultas.
const getAllCountriesController = async (name) => {
      // Si no se proporciona un nombre, devuelve todos los países con sus actividades asociadas
      if (!name) {
        return await Country.findAll({
          include: Activity, // Aquí se incluye el modelo Activity para facilitar el filtrado de actividades
        });
      }
    
      // Si se proporciona un nombre, busca países que coincidan con el nombre y devuelve sus actividades asociadas
      const countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%` // La condición de búsqueda: el nombre del país debe contener el valor proporcionado (case-insensitive)
          }
        },
        include: Activity // Se incluye el modelo Activity para asociar las actividades con los países encontrados
      });
    
      // Si no se encuentran países que coincidan con el nombre proporcionado, lanza un error
      if (countries.length === 0) {
        throw new Error('País inexistente');
      }
    
      // Devuelve los países encontrados con sus actividades asociadas
      return countries;
    };
    

module.exports = { getAllCountriesController };