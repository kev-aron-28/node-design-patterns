interface ListImpl {
    elements: number[];

    add(num: number): void;
    getElements(): number[];
}


class OrderedList implements ListImpl {
    elements: number[] = [];
    
    add(num: number): void {
        this.elements.push(num);
        this.elements.sort((a,b ) => a - b );
    }

    getElements(): number[] {
        return this.elements;
    }
    
}

class UniqueList implements ListImpl {
    elements: number[] = [];
    add(num: number): void {
        if(!this.elements.includes(num)) {
            this.elements.push(num);
        }
    }

    getElements(): number[] {
        return this.elements;
    }
}


interface DataAbstraction { 
    implementor: ListImpl;
    add(number: number): void;
    get(): number[];
    operation(fn: (n: number) => number ): number[];
}

class DataRefinedAbstract implements DataAbstraction {
    implementor: ListImpl;

    constructor(implementor: ListImpl) {
        this.implementor = implementor;
    }

    public add(number: number): void {
        this.implementor.add(number);
    }

    public get(): number[] {
       return this.implementor.getElements();
    }

    public operation(fn: (n: number) => number): number[] {
        return this.implementor.getElements().map(fn);
    }
    
}


const uniqueData = new DataRefinedAbstract(new UniqueList());
const orderedData = new DataRefinedAbstract(new OrderedList());
uniqueData.add(1);
uniqueData.add(2);
uniqueData.add(3);
uniqueData.add(4);
uniqueData.add(5);
uniqueData.add(5);
console.log(uniqueData.get());

orderedData.add(100);
orderedData.add(5);
orderedData.add(10);
orderedData.add(20);
console.log(orderedData.get())
