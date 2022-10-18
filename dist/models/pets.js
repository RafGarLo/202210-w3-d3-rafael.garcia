export class Pet {
    constructor(name, breed, owner) {
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.id = Pet.createId();
        this.name = name;
        this.breed = breed;
        this.owner = owner;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
