


const { Activity, Country } = require('../db.js');

const postActivityController = async (name,duration, difficulty,  season, countries) => {
    // console.log('post controller', name, duration, season, countries)
    if (!name || !difficulty || !season || !countries) {
        throw new Error('Faltan datos');
    } else {
        let arrayOfCountries = [];

        for (const countryName of countries) {
            let addCountry = await Country.findOne({
                where: {
                    name: countryName,
                }
            });

            if (addCountry) {
                arrayOfCountries.push(addCountry);
            } else {
                throw new Error(`No se encontró el país con el nombre: ${countryName}`);
            }
        }

        const newActivity = await Activity.create({
            name,
            duration,
            difficulty,
            season
        });

        await newActivity.addCountries(arrayOfCountries);
        //    console.log ('newActivi', newActivity)
        return newActivity;
    }
};

module.exports = {
    postActivityController
};
