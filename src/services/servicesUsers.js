const Boom = require('@hapi/boom');
const {models}=require('../../libs/sequelize');

const getAllUsers = async ()=>{
    try {
        const users = await models.User.findAll();
        return users;
    } catch (error) {
        console.log(error);
    }
};

const getUserById = async (id)=>{
    try {
        const userById = await models.User.findByPk(id);
        if(!userById){
            throw Boom.notFound('User not found');
        }
        return userById;
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (body)=>{
    try {
        const newUser = await models.User.create(body);
        return {
            user:newUser,
            message:'User created'
        }
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async ({id, body})=>{
    try {
        const user = await models.User.findByPk(id);
        if (!user) {
            return {
                error: 'User not found'
            }
        }
        const updatedUser = await user.update(body);
        return updatedUser;
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (id)=>{
    try {
        const user = await models.User.findByPk(id);
        await user.destroy();
        return {
            message:'User deleted',
            id
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}