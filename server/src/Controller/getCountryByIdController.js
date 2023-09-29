const db = require( '../db' )
const {Activity}=require ('../db')
const {getCountriesApi}= require ('../../utils')



const getCountryByIdController= async (id) =>{

   
    const countDb= await  (getCountriesApi)

// console.log("controllerr var id", id)

    const bd= await countDb.findByPk(id,{
    include:[
        {
        model: Activity,
        attributes: ["id", "name"]
    }]}
    )
    return db
    }





module.exports ={
    getCountryByIdController
}