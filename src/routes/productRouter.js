const express = require('express');
const productsServices = require('../services/servicesProducts');
const validatorHandler = require('../middleware/validator.handler');
const { 
    schemaProductCreate,
    updateSchemaProduct,
    getProductSchema
} = require('../schema/schemaProduct');

const router = express.Router();

router.get('/', (req, res, next)=>{
    try {
        res.status(200).json(productsServices.getProductsBySize(req, res));
    } catch (error) {
        next(error);
    }
});

router.post('/', validatorHandler(schemaProductCreate, 'body'),
 async (req, res)=>{
    await productsServices.createNewProduct(req, res);
});

router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateSchemaProduct, 'body'),
    (req, res)=>{
    productsServices.EditProductById(req, res);
});

router.delete('/:id', (req, res)=>{
    productsServices.deleteProductById(req, res);
})

module.exports = router;