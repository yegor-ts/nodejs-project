const {v4: uuidv4} = require('uuid');

const FileSystem = require('./app/lib/DbFileManager');
const Post = require('./Post');

const dirPath = process.env.DIR_PATH;

class User extends FileSystem {
    constructor(name) {
        super(dirPath, 'user');
        this.name = name;
        this.id = uuidv4();
    }

    async saveUser() {
        await this.createEntity('user', {
            name: this.name,
            id: this.id
        });
        return this;
    }

    async getUser(id) {
        return this.getEntity('user', id);
    }

    async update(dataForUpdate) {
        return this.updateEntity('user', this.id, dataForUpdate);
    }

    async delete() {
        await this.deleteEntity('user', this.id);
        return this;
    }

    async createPost(text) {
        const post = new Post(this.id, text);
        await post.savePost();
        return post;
    }
}

module.exports = User;