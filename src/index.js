require('dotenv').config();
const App = require('./server');

const app = new App();
const port = process.env.PORT;

app.start(port);