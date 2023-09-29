const { Activity, Country } = require("../db");

const getAllActivitiesController = async () => {
    // console.log('act cont')
    const getAllActivities = await Activity.findAll({
            include: {
            model: Country,
            attributes: ["name", "flag"],
            through: {attributes: []}
        }});
    return getAllActivities;
};

module.exports = getAllActivitiesController;