const emmiter = require('./EvenBus');

class Topic {
    constructor(topic) {
        this.topic = topic;
        this.subscriber = [];
        this.posts = [];
    }

    subscribe(user) {
        this.subscriber.push(user.getName);
    }

    add(msg) {
        this.posts.push(msg);
        this.notify(msg);
    }

    notify(message) {
        emmiter.emit("new-post", {
            topic: this.topic,
            message,
            subscribers: this.subscriber
        })
    }
}

module.exports = Topic;