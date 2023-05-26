const express = require('express');
const UsersServices = require('../services/servicesUsers');
const router = express.Router();


router.get('/', (req, res)=>{
    UsersServices.getUser(req, res);
});

router.get('/:id', (req, res)=>{
    UsersServices.getUserById(req, res);
});

module.exports = router;