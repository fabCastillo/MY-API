const faker = require('faker');
// const boom = require('@hapi/boom');

const getProductsBySize = (req) => {
    try {
        const products = [];
        const { size } = req.query;
        const limit = size || 5;
        for (let index = 0; index < limit; index++) {
            products.push({
                "name": faker.commerce.productName(),
                "image": faker.image.imageUrl()
            })
        }
        return products;    
    } catch (error) {
        console.log('Error desde el services')
    }
}

const createNewProduct = async (req, res) => {
    const body = req.body;
    res.status(201).json({
        ok: true,
        data: body
    });
}

const EditProductById = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(201).json({
        message: 'sucess',
        product: body,
        id
    });
}

const deleteProductById = (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'deleted',
        id
    })
}

module.exports = {
    getProductsBySize,
    createNewProduct,
    EditProductById,
    deleteProductById
}