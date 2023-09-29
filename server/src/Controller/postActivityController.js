const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const postActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
//  console.log('ho')
const find = await Country.findAll({
    where: { name: { [Op.iLike]: name } }});
  
  if (!find.length) {
  const postActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

//   const countriesData = await Countries.findAll({
//     where: {
//       name: countries,
//     },
//   });

//   const countryIds = countriesData.map((country) => country.id);
  await postActivity.addCountries(countries);

  return postActivity;
  }
};

module.exports = postActivityController;