import { King } from './king';

export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    static serie = 'GOT';
    message: string;
    friend: King | null;
    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        this.friend = null;
    }
    communicate() {
        return '';
    }
    death() {
        this.lifeStatus = false;
    }
}
