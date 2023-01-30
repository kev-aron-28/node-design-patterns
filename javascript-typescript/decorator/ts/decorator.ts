interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`
    }
}

abstract class ProductDecorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    getDetail(): string {
        return this.component.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    private tradename: string = '';
    private brand: string = '';

    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ${super.getDetail()}`;
    }
}

const component: Component = new ProductComponent('Valentina');
const componentDecorator: Component = new CommercialInfoProductDecorator(component, 'valentina la mejor', 'Inc');
console.log(componentDecorator.getDetail());
