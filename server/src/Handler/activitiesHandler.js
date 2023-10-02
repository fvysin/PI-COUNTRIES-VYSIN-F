const {getAllActivitiesController}=require ("../Controller/getAllActivitiesController")
const {postActivityController}= require ('../Controller/postActivityController')


const getAllActivitiesHandler=async(req, res)=>{

    try {
       
        const response=await getAllActivitiesController()

        // console.log('temperamentHandler', response)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json (error.message)

    }
}
//body->recibimos info
const postActivitiesHandler= async(req, res)=>{

    //LE HAGO UN ASYN AWAIT
    try {
        const {name, difficulty, duration, season, countries } =req.body
        
        const newActivity = await postActivityController( name, difficulty, duration, season, countries   )
        // console.log('post handler', newActivity)
   
        res.status(201).json(newActivity) 
   
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}


module.exports={
    getAllActivitiesHandler,
    postActivitiesHandler
} 



