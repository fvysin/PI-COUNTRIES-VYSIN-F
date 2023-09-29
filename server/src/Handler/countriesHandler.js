const {getAllCountriesController}= require ('../Controller/getAllCountriesController')
const {getCountryByIdController} =require ('../Controller/getCountryByIdController')


const getAllCountriesHandler = async(req,res) => {
    console.log('hola detro')

    try {
        const { name } = req.query;
        // console.log('getall', name)
        const response= await getAllCountriesController(name);
        
        if(response.length === 0){
            
            res.status(201).json({message:'No se encontraron coincidencias, Por favor Recargar Todas los paises'})

        } else{
            
            res.status(201).json(response);}

        } catch (error) {res.status(404).json({error: error.message})}
    
    }


//id->params
//obtiene una raza especifica por id
//funcionar para api y Bd

const getCountryByIdHandler=async(req, res)=>{
    const {id}= req.params
    // console.log("handler var id",id)
 
    try {
        const country= await getCountryByIdController(id)
        res.status(200).json(country)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}


// //query--_> NO MODIFICA LA RUTA ORIGINAL
//teiene que encontrarse en Mayusc y Minusc
//mostrar mensaje de error
//funcioanr para api y bd
const getCountryByNameHandler=async(req, res)=>{
    const {name}=req.query
    try {
        if(name){
            const apiCount= await getAllCountriesController(name)
            // //busca el nombre en todos los paises
            if(apiCount.length === 0){
                //
            res.status(200).json({message:'No se encontraron coincidencias, Por favor Recargar Todas las Paises'})
        }else{
    
            res.status(200).json(apiDogs)
        }
    }
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}


   







module.exports={
    getAllCountriesHandler,
    getCountryByIdHandler,
    getCountryByNameHandler
}



//REQ.BODY= 
    //EN EL CUERPO
    //PARA POST/PUT
    //SE UTILIZA PARA RECIBIR DATOS ENVIADOS POR EL CLIENTE EN EL CUERPO DE LA SOLICITUD

//REQ.QUERY
    //EN LA URL COMO PARAMETROS
    //VA DESP DEL ?
    //PARA GET
    //RECIBE DATOS QUE SON PARTE DE LA URL Y SE PASAN COMO PARAMETROS

//REQ.PARAMS
    //EN LA RUTA DE LA URL
    // :
    //RECIBE DATOS QUE ESTAN INCRUSTADOS EN LA RUTA, FORMAN PARTE DE LA RUTA
