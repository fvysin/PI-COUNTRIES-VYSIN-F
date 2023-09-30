const {Router}= require ('express')
const {getAllActivitiesHandler,  postActivitiesHandler} = require ('../Handler/activitiesHandler')

const activitiesRouter=Router()

activitiesRouter.post("/post", postActivitiesHandler);
activitiesRouter.get("/",getAllActivitiesHandler)



module.exports=activitiesRouter