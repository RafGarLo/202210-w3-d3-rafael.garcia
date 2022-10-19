import { PETS } from '../models/data-pets.js';
import { Pet } from '../models/pets.js';
import { AddPet } from '../pet-add.js';
import { Component } from './old/component.js';

export class PetList extends Component {
    template!: string;
    pets = [...PETS];
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-task');
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) =>
                    item.addEventListener(
                        'click',
                        this.handlerEraser.bind(this)
                    )
                );
        }, 100);
    }

    createTemplate() {
        let template = `<section>
                <h2>List of Pets</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.pets.forEach((item: Pet) => {
            template += `
            <li> ${item.id} - ${item.name} - ${item.breed} - ${item.owner}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev: Event) {
        const name = (
            document.querySelector('#first-answer') as HTMLInputElement
        ).value;
        const breed = (
            document.querySelector('#second-answer') as HTMLInputElement
        ).value;
        const owner = (
            document.querySelector('#third-answer') as HTMLInputElement
        ).value;
        this.pets.push(new Pet(name, breed, owner));
        this.manageComponent();
    }
    handlerEraser(ev: Event) {
        const deletedID = (ev.target as HTMLElement).dataset.id;
        this.pets = this.pets.filter(
            (item) => item.id !== +(deletedID as string)
        );
        this.manageComponent();
    }
}
