class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

class ClientDecorator {
    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }
}

class UpperCaseClientDecorator extends ClientDecorator {

    async getData() {
        const data = await super.getData();
        const newData = data.map(e => {
            e.title = e.title.toUpperCase();
            return e;
        });
        return newData;
    }
}

class HTMLProductDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map(e => {
            e.title = `<h1>${e.title}</h1>`
            e.thumbnailUrl = `<img src="${e.thumbnailUrl}">`
            return e;
        });
        return newData;
    }
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    const clientComponent = new ClientComponent(url);
    const upperCase = new UpperCaseClientDecorator(clientComponent);
    const htmlProduct = new HTMLProductDecorator(upperCase);
    const data = await htmlProduct.getData();

    divContent1.innerHTML = data.reduce((ac, e) => {
        return ac + e.title + e.thumbnailUrl
    }, "")
})()
