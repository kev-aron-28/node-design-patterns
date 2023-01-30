class Productcomponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`
    }
}

class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class CommercialInfo extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`
    }
}

class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetail() {
        return super.getDetail() + ' ' + this.price;
    }
}

class HTMLProductDecorator extends ProductDecorator {
    getDetail() {
        return `<h1>Informacion</h1>
            <p>
                ${super.getDetail()}
            </p>
        `
    }
}

const productComponent = new Productcomponent("Carro");
const commerciaDecorator = new CommercialInfo(productComponent, "Test", "Test");
const storeProductDecorator = new StoreProductDecorator(productComponent, 12)

const product = new StoreProductDecorator(commerciaDecorator, 12);
const htmlProduct = new HTMLProductDecorator(product);

myDiv.innerHTML = htmlProduct.getDetail()

console.log(product.getDetail());
