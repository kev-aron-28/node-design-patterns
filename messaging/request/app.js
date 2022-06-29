const wsUri = 'ws://localhost:3000';
const wsServerPort = 3000;
new (require('./Server'))(wsServerPort);

const client = new(require('./Client'))(wsUri);

client.send("This is my first message", res => {
    console.log('Task 1: ', res);
})