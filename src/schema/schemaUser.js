const Joi = require('joi');

const id = Joi
    .string();
const email = Joi
    .string()
    .email();
const password = Joi
    .string()
    .min(10);

const schemaUserCreate = Joi.object({
    email:email.required(),
    password:password.required()
});

const updateSchemaUser = Joi.object({
    email:email
});

const getUserSchema = Joi.object({
    id: id.required()
});

module.exports = {
    schemaUserCreate,
    updateSchemaUser,
    getUserSchema
}