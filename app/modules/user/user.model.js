const DbFileManager = require('../../lib/DbFileManager');

const {pathToDir} = require('../../lib/config');

class User {
    constructor() {
        this.repository = new DbFileManager(pathToDir, 'user');
    }

    async save(entity) {
        return await this.repository.createEntity('user', entity);
    }

    async findOne(id) {
        return await this.repository.getEntity('user', id);
    }

    async findAll() {
        return await this.repository.getAll('user');
    }

    async updateOne(id, dataForUpdate) {
        return await this.repository.updateEntity('user', id, dataForUpdate);
    }

    async deleteOne(id) {
        return await this.repository.deleteEntity('user', id);
    }
}

module.exports = User;