const DbFileManager = require('../../lib/DbFileManager');

const {pathToDir} = require('../../lib/config');

class User {
    constructor() {
        this.fileName = 'user'
        this.repository = new DbFileManager(pathToDir, 'user');
    }

    async save(entity) {
        return await this.repository.createEntity(this.fileName, entity);
    }

    async findOne(id) {
        return await this.repository.getEntity(this.fileName, id);
    }

    async findAll() {
        return await this.repository.getAll(this.fileName);
    }

    async updateOne(id, dataForUpdate) {
        return await this.repository.updateEntity(this.fileName, id, dataForUpdate);
    }

    async deleteOne(id) {
        return await this.repository.deleteEntity(this.fileName, id);
    }

    getName() {
        return this.fileName;
    }
}

module.exports = User;