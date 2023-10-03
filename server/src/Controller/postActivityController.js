

// const {Activity, Country} = require ("../db");

// const postActivityController = async (name, difficulty, duration, season, countries) => {
//     if (!name || !difficulty || !season || !countries) {
//         throw new Error("No se puede crear la actividad. Faltan datos");
//     } else {

//         let arrayOfCountries = [];

//         // for (const country of countries) {
//         //     let addCountry = await Country.findByPk(country); 
//         //     if (!addCountry) {
//         //         throw new Error(`Pais con el Id ${country} inexistente.`);
//         //     }
//         //     arrayOfCountries.push(addCountry); 
//         // }


// }
//       }

//         const newActivity = await Activity.create({
//           name,
//           difficulty,
//           duration,
//           season
//         });






        
//         await newActivity.addCountries(arrayOfCountries); //le relaciono el array con los paises en la tabla intermedia
// console.log('arrayOfCount',arrayOfCountries)
//         // console.log ('newActivi', newActivity)
//         return newActivity;
//     }
// };

// module.exports = {
//   postActivityController
// };



const { Activity, Country } = require('../db.js');

const postActivityController = async (name, difficulty, duration, season, countries) => {
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
            difficulty,
            duration,
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
