const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoute');

router.use(noteRoutes);


module.exports =  router;