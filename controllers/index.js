const router = require('express').Router();

const apiRoutes = require('./api/apiRoutes');
const homeRoutes = require('./homeRoutes.js');

// --> Define URL ADDRESS (ROUTE PREFIXES)
router.use('/', homeRoutes);  
router.use('/api', apiRoutes);

// --> Make the 'router' object available outside of this file
module.exports = router;
