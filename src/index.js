const App = require('./server');
const config = require('../config');

const app = new App();
const port = config.port;

app.start(port);