const Topic = require('./Topic');
const User = require('./User');

const Jonh = new User("Jonh Doe");
const Mike = new User("Michael Joe");

const NodeJs = new Topic("Node.js");
const ReactJs = new Topic("React.js");

NodeJs.subscribe(Jonh);
NodeJs.subscribe(Mike);
ReactJs.subscribe(Mike);

NodeJs.add("New version of node js");
ReactJs.add("Reack hooks");
