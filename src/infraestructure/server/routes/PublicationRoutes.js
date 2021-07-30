const express = require('express');
let router = express.Router();
const {createPublication, listPublications, removePublication, modificPublication} = require('../controller/PublicationController');


router.post('/publication', createPublication)
router.get('/publication', listPublications)
router.delete('/publication/:id', removePublication)
router.put('/publication/:id', modificPublication);

module.exports =router