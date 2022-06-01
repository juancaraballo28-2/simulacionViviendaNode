const MongoLib = require('../lib/mongo');

class ViviendaService{
    constructor(){
        this.collection = 'viviendas';
        this.mongoDB = new MongoLib();
    }
    async getViviendas(){
        const viviendas = await this.mongoDB.getAll(this.collection);
        return viviendas || [];
    }

    async getVivienda({id}){
        const vivienda = await this.mongoDB.get(this.collection, id);
        return vivienda || {};
    }
    async createVivienda({vivienda}){
        const createViviendaId = await this.mongoDB.create(this.collection, vivienda);
        return createViviendaId;
    }
    async updateVivienda({id, vivienda} = {}){
        const updatedViviendaId = await this.mongoDB.create(this.collection, id, vivienda);
        return updatedViviendaId;
    }
    async deleteVivienda(){
        const deletedViviendaId = await Promise.resolve();
        return deletedViviendaId;
    }
}
module.exports = ViviendaService;