var router = require('express').Router();

router.use('/users', require('./users'));
router.use('/trips', require('./trips'));


module.exports = router;