const {v4: uuidv4} = require('uuid');

const FileSystem = require('./File');

const dirPath = process.env.DIR_PATH;

class Post extends FileSystem {
    constructor(authorId, text) {
        super(dirPath, 'post');
        this.text = text;
        this.authorId = authorId;
        this.id = uuidv4();
    }

    async savePost() {
        await this.createEntity('post', {
            id: this.id,
            authorId: this.authorId,
            text: this.text
        });
        return this;
    }

    async getPost() {
        return this.getEntity('post', this.id);
    }

    async updatePost(dataForUpdate) {
        return await this.updateEntity('post', this.id, dataForUpdate);
    }

    async deletePost() {
        await this.deleteEntity('post', this.id);
        return this;
    }
}

module.exports = Post;