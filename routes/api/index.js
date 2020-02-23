var router = require('express').Router();

router.use('/users', require('./users'));
router.use('/trips', require('./trips'));
// router.use('/lists', require('./lists'));
// router.use('/todos', require('./todos'));

module.exports = router;