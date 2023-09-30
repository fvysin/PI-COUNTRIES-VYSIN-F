// const axios = require("axios");
// const {Country} = require ('./src/db')

// const getCountriesApi=async()=>{
//     try{
//         const {data}= await axios.get ("http://localhost:5000/countries")
//         console.log('data api')
//         console.log(data)
//     const countries= data.map((user)=>{
//         return{
//             id:user.cca3,
//             name:user.name.common, 
//             flag:user.flag.png, 
//             continents: user.continents [0], 
//             capital:user.capital? user.capital : "no info",
//             subregion:user.subregion? user.subregion : "no info", 
//             area: user.area,
//             population: user.population, 
//         }
//     })
    
//     await Country.bulkCreate(countries)
        
// return data

// }catch (error){
//     console.log('error')
// }
// }


// module.exports={
//     getCountriesApi
// }


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
                name: data[i].name.official,
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
                    area: countryInfo.area,
                    image: countryInfo.image,
                    population: countryInfo.population,
                    continents: countryInfo.continents,
                    subregion: countryInfo.subregion === undefined ? 'null' : countryInfo.subregion,
                    capital: countryInfo.capital === undefined ? 'null' : countryInfo.capital[0]  //&& countryInfo.capital[0],
                },

            });

        };
        return data
    }
    catch(error){console.log(error.message)}
};

module.exports =
    loadCountries
 
    