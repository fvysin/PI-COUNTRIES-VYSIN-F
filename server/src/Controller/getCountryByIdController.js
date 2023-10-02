const db = require( '../db' )
const {Activity, Country}=require ('../db')
// const { Op } = require("sequelize");

const getCountryByIdController= async (id) =>{

// console.log("controllerr var id", id)
//OJO mayusculas/minusculas

    const country = await Country.findAll({
        where: {
          id: id.toUpperCase(),
        },
        include: [
          {
          model: Activity,
          attributes: ['name', 'duration', 'difficulty', 'season'],
          through: { attributes: [] },
        },]
      });
      if (country.length === 0) {
        return { error: 'País no encontrado' };
    }

    
      return country;
    };




module.exports ={
    getCountryByIdController
}