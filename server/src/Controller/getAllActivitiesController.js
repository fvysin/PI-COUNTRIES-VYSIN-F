const { Activity, Country } = require("../db");

const getAllActivitiesController = async () => {
    // console.log('act cont')

    const getAllActivities = await Activity.findAll({where:{}, include: {
        model: Country,
        attributes: ["name", "image"],
        through: {attributes: []}
    }});
return getAllActivities;
};

module.exports = {
    getAllActivitiesController
}

