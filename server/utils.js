const axios = require('axios');
const { Country, Activity} = require("./src/db")

// console.log('hoo')
const loadCountries = async () => {
    const url = 'http://localhost:5000/countries';
    // console.log(url)
    try{

        const { data } = await axios(url);
        // console.log('dataapi', data)
        for (let i = 0; i < data.length; i++) {
            let countryInfo = {
                name: data[i].name.common,
                id: data[i].cca3,
                area: data[i].area,
                image: data[i].flags.png,
                population: data[i].population,
                continents: data[i].continents[0],
                subregion: data[i].subregion,
                capital: data[i].capital
            }
            // console.log(countryInfo)
            //Guarda los datos
            await Country.findOrCreate({
                where: {
                    name: countryInfo.name,
                    id: countryInfo.id,
                    area: countryInfo.area=== undefined ? 'No information' : countryInfo.area,
                    image: countryInfo.image,
                    population: countryInfo.population,
                    continents: countryInfo.continents,
                    subregion: countryInfo.subregion === undefined ? 'No information' : countryInfo.subregion,
                    capital: countryInfo.capital === undefined ? 'No information' : countryInfo.capital[0]  //&& countryInfo.capital[0],
                    
                },

            });

        };
        return data
    }
    catch(error){console.log(error.message)}
};

module.exports =
    loadCountries
 
    