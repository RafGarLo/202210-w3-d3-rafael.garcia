export class Pet {
    static id: number;
    name: string;
    isAdopted: boolean;
    species: string;
    owner: string;
    constructor(
        name: string,
        isAdopted: boolean,
        species: string,
        owner: string
    ) {
        this.name = name;
        this.isAdopted = false;
        this.species = species;
        this.owner = owner;
    }
}
