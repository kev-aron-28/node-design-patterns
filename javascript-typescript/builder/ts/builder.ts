class PersonObj {
    constructor(
        private name: string,
        private lastName: string,
        private age: number,
        private country: string,
        private city: string,
        private hobbies: string[]
    ) { }

    getFullname(): string {
        return this.name + " " + this.lastName;
    }
}

interface PersonBuilder {
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
    setName(name: string): PersonBuilder;
    setLastName(lastName: string): PersonBuilder;
    setAge(age: number): PersonBuilder;
    setCountry(country: string): PersonBuilder;
    setCity(city: string): PersonBuilder;
    addHobby(hobbies: string): PersonBuilder;
    build(): PersonObj;
}

class NormalPersonBuilder implements PersonBuilder {
    name: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    constructor() {
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    reset() {
        this.name = "";
        this.lastName = "";
        this.age = 0;
        this.country = "";
        this.city = "";
        this.hobbies = [];
    }

    setName(name: string): PersonBuilder {
        this.name = name;
        return this;
    }
    setLastName(lastName: string): PersonBuilder {
        this.lastName = lastName;
        return this;
    }
    setAge(age: number): PersonBuilder {
        this.age = age;
        return this;
    }
    setCountry(country: string): PersonBuilder {
        this.country = country;
        return this;
    }
    setCity(city: string): PersonBuilder {
        this.city = city;
        return this;
    }
    addHobby(hobbies: string): PersonBuilder {
        this.hobbies.push(hobbies);
        return this;
    }
    build(): PersonObj {
        const person = new PersonObj(
            this.name,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies
        );
        this.reset();
        return person;
    }

}

const personBuilder = new NormalPersonBuilder();
const kevin = personBuilder
    .setName("Kevin")
    .setAge(18)
    .setCity("CDMX")
    .setCountry("MExico")
    .setLastName("Tapia")
    .addHobby("Run")
    .build();

console.log(kevin);
