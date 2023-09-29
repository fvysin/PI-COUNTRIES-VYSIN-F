const {Router}= require ('express')
const {getAllCountriesHandler, 
    getCountryByIdHandler, 
    getCountryByNameHandler} = require ('../Handler/countriesHandler');

const countriesRouter=Router()

countriesRouter.get("/",getAllCountriesHandler)
countriesRouter.get("/:id", getCountryByIdHandler);
countriesRouter.get("/name/:name", getCountryByNameHandler);


module.exports=countriesRouter