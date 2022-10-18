import { King } from './king';
export const characters = [
    new King('Joffrey', 'Baratheon', 17, 3),
    new King('Pepe', 'Pelaez', 24, 4),
];
characters[0].friend = characters[1];
console.log(characters);
