
const { Activity, Country } = require('../db.js');

const postActivityController = async (name, difficulty, duration, season, countries) => {
  if (!name || !difficulty || !season || !countries) {
    throw new Error('Faltan datos');
  }


  // const countryid = await Country.findAll({
  //   where: { 
  //     id: countries }
  // });
  
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration: duration ? duration : null,
    season
  });
  if (!newActivity){
    throw new Error('Faltan datos');
  }
  
  // Busca o crea el país usando solo el nombre
  
  // Asocia la actividad con el país encontrado o creado
  countries.forEach(async (country) => {
    let activityCountry = await Country.findOne({
      where: {
        id: country,
      },
    });
  await newActivity.addCountry(activityCountry);
  })
  ///OJOOOO

  return newActivity;
};

module.exports = {
  postActivityController
};
