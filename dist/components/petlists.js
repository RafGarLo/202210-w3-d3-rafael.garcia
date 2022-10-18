import { PETS } from '../models/data-pets.js';
import { Pet } from '../models/pets.js';
import { AddPet } from '../pet-add.js';
import { Component } from './old/component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...PETS];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-task');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            template += `
            <li> ${item.id} - ${item.name} - ${item.breed} - ${item.owner}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        const name = document.querySelector('#first-answer').value;
        const breed = document.querySelector('#second-answer').value;
        const owner = document.querySelector('#third-answer').value;
        this.pets.push(new Pet(name, breed, owner));
        this.manageComponent();
    }
    handlerEraser(ev) {
        const deletedID = ev.target.dataset.id;
        this.pets = this.pets.filter((item) => item.id !== +deletedID);
        this.manageComponent();
    }
}
