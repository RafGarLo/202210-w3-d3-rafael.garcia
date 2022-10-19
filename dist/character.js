export class Character {
    constructor(name, family, age) {
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
Character.serie = 'GOT';
