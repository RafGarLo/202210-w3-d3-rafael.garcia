export class Pet {
    id: number;
    isAdopted: boolean;

    static createId() {
        return Math.round(Math.random() * 1_000_000);
    }

    constructor(
        public name: string,
        public breed: string,
        public owner: string
    ) {
        this.id = Pet.createId();
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.isAdopted = false;
    }
}
