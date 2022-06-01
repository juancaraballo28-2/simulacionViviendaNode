const express = require('express');
const ViviendasService = require('../services/viviendas');
const bodyParser = require('body-parser');

async function viviendasApi(app){
    const router = express.Router();
    app.use(router);
    app.use(bodyParser.json());
    var jsonParser = bodyParser.json()
    const viviendasService = new ViviendasService();

    router.post('/crearVivienda/', jsonParser, async function(req, res){
        const vivienda = req.body;
        const createdViviendaId = await viviendasService.createVivienda({vivienda});
        res.status(200).json(
            {
                data: createdViviendaId,
                message: 'Vivienda Creada'
            }
        )
    });

    router.get('/consultarVivienda/:id',  async function(req, res){
        const {id} = req.params;
        const vivienda = await viviendasService.getVivienda({id});
        res.status(200).json({ViviendaBuscada:vivienda})
    });

}
module.exports = viviendasApi;