
const express = require('express');
const { getWork,
    getWorks,
    createWork,
    updateWork,
    deleteWork }
    = require('../controllers/work')
const router = express.Router();

router
    .route('/')
    .get(getWorks)
    .post(createWork);

router
    .route('/:id')
    .get(getWork)
    .put(updateWork)
    .delete(deleteWork);
module.exports = router;
