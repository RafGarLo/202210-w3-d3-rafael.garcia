import { PETS } from '../models/data-pets.js';
import { Pet } from '../models/pets.js';
import { AddPet } from './add-pets.js';
import { Component } from './component.js';
import { Store } from '../services/storage.js';
import { ItemPet } from './item.pets.js';

export class PetList extends Component {
    template!: string;
    pets: Array<Pet>;
    storeService: Store<Pet>;
    constructor(public selector: string) {
        super();
        this.storeService = new Store<Pet>();
        if (this.storeService.getStore().length === 0) {
            this.pets = [...PETS];
            this.storeService.setStore(this.pets);
        } else {
            this.pets = this.storeService.getStore();
        }
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet', this.handleAdd.bind(this));
    }

    createTemplate() {
        let template = `<section>
                <h2>List of Pets</h2>
                <slot id="add-pet"></slot>
                <ul>`;
        this.pets.forEach((item: Pet) => {
            template += new ItemPet(
                '',
                item,
                this.handlerEraser.bind(this),
                this.handlerAdoption.bind(this)
            ).template;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev: Event) {
        ev.preventDefault();
        const name = (document.querySelector('#pet-name') as HTMLInputElement)
            .value;
        const breed = (document.querySelector('#breed') as HTMLInputElement)
            .value;
        const owner = (document.querySelector('#owner') as HTMLInputElement)
            .value;
        this.pets.push(new Pet(name, breed, owner));
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }
    handlerEraser(deletedID: number) {
        this.pets = this.pets.filter((item) => item.id !== +deletedID);
        this.storeService.setStore(this.pets);
        this.manageComponent();
    }
    handlerAdoption(changeId: number) {
        const i = this.pets.findIndex((item) => item.id === changeId);
        this.pets[i].isAdopted = !this.pets[i].isAdopted;
        this.storeService.setStore(this.pets);
    }
}
