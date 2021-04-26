require('dotenv').config();

const dirPath = process.env.DIR_PATH;

const FileSystem = require('./File');
const User = require('./User');
const Post = require('./Post');

const file = new FileSystem(dirPath, 'user', 'post');
const user = new User('John');

const start = async() => {
    await user.saveUser();
    const post = await user.createPost('Hello');
    console.log(await post.getPost());
}

start();