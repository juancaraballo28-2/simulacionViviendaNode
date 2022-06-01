const express = require('express');
const app = express();

const{config } = require('./config/index');

const viviendasApi = require('./routes/viviendas.js');

viviendasApi(app);

app.listen(config.port, function(){
    console.log(`listening http://localhost:${config.port}`);
});

    