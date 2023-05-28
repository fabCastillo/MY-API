const express = require('express');
const UsersServices = require('../services/servicesUsers');
const router = express.Router();


router.get('/', async (req, res, next)=>{
    try {
        const getUsers = await UsersServices.getAllUsers(req, res);
        return res.send(getUsers);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next)=>{
    try {
        const { id } = req.params;
        const getUserById = await UsersServices.getUserById(id);
        return res.send(getUserById);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next)=>{
    try {
        const body = req.body;
        const newUser = await UsersServices.createUser(body);
        return res.json(newUser);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedUser = await UsersServices.updateUser({id, body});
        return res.json(updatedUser);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next)=>{
    try {
        const { id } = req.params;
        const deletedUser = await UsersServices.deleteUser(id);
        return res.json(deletedUser);
    } catch (error) {
        next(error);
    }
});

module.exports = router;