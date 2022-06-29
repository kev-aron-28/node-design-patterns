class Db1 {
    constructor(db) {
        this.db = db;
        this.collection = '';
        this.op = ''
    }

    defaults(obj) {
        this.collection = Object.keys(obj)[0];
        this.op = "INIT"
        return this;
    }

    get(collection) {
        this.collection = collection;
        return this;
    }
    
    value() {
        return this.collection;
    }

    push(data) {
        this.dataToPush = data;
        this.op = "WRITE";
        return this;
    }

    write(){
        if(this.op) {
            switch(this.op){
                case "INIT": 
                    this.db[this.collection] = [];
                    this.collection = null;
                    this.op = null;
                    break;
                case "WRITE": 
                    this.db[this.collection] = this.dataToPush;
                    this.collection = null;
                    this.op = null;
                    this.dataToPush = null;
                    break;
            }
        }

        return this;
    }
}

module.exports = Db1;