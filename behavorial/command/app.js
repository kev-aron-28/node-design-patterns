const Invoker = require("./Invoker");
const Db = require('./Database');
const Post = require("./Post");
const View  = require("./View");
const Update = require("./Update");

const Blog = new Invoker(Db);

Blog.execute(
    new Post("First post", "Hello everyone")
);

Blog.execute(new Post("Second post", "This is the second post"));
Blog.execute(new Update("Second post", "Hello i updated this post"));
Blog.execute(new View());
