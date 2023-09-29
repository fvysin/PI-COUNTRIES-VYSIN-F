const { Router } = require('express');
const activitiesRouter= require('./activitiesRouter');
const countriesRouter = require( './countriesRouter' );

const mainRouter = Router();

mainRouter.use("/activities", activitiesRouter);
mainRouter.use("/countries",countriesRouter)

module.exports = mainRouter;

