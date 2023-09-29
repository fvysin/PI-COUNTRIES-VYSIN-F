const {getAllActivitiesController}=require ('../Controller/getAllActivitiesController')
const {postAtivityController}= require ('../Controller/postActivityController')


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
//debe crear la raza en la DB, y la DB debe estar relacionada con los temperamentos 
const postActivitiesHandler= async(req, res)=>{
    //LE HAGO UN ASYN AWAIT
    //body viene de un form de perros
    try {
        const { country, name, difficulty, duration, season } =req.body
     
        
        const newActivity = await postAtivityController({ country, name, difficulty, duration, season, activity }  )
   
        res.status(201).json(newActivity) 
   
    } catch (error) {
        res.status(404).json({error:error.message})
    }

}


module.exports={
    getAllActivitiesHandler,
    postActivitiesHandler

} 



