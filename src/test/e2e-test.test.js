const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const url = 'localhost:3000';

describe('Ruta raiz', ()=>{
    
    it('Deberia devolver un mensaje de bienvenida', (done)=>{
        chai
            .request(url)
            .get('/')
            .end((err, res)=>{
                expect(res).to.have.status(200);
                expect(res.text).to.equal("Hola mundo");
                done();
            });
    });

});

describe('API de Products', ()=>{
    it('Deberia crear un nuevo producto', (done)=>{
        const dataSend = { name: 'Andres', price: 4000 };
        chai
            .request(url)
            .post('/api/v1/products')
            .send(dataSend)
            .end((err, res)=>{
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.have.property('name');
                expect(res.body.data).to.have.property('price');
                expect(res.body.data.name).to.be.a('string');
                expect(res.body.data.price).to.be.a('number');
                expect(res).to.have.status(201);
                done();
            });
    });
});