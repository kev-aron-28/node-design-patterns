class Db {
    constructor(db) {
        this.db = db;
    }

    init(collection) {
        this.db.defaults({ [collection]: [] }).write();
    }


    get(collection) {
        console.log(this.db.get(collection));
    }

    add({ collection, data }) {
        return this.db
            .get(collection)
            .push(data)
            .write();
    }
}

module.exports = Db;