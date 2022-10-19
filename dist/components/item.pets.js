import { Component } from './component.js';
export class ItemPet extends Component {
    constructor(selector, item, handleDelete, handleAdoption) {
        super();
        this.selector = selector;
        this.item = item;
        this.handleDelete = handleDelete;
        this.handleAdoption = handleAdoption;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#d${this.item.id}`).addEventListener('click', () => {
                this.handleDelete(this.item.id);
            });
            document.querySelector(`#c${this.item.id}`).addEventListener('change', () => {
                this.handleAdoption(this.item.id);
            });
        }, 100);
    }
    createTemplate() {
        return `<li> 
        <span>${this.item.id}</span> - 
        <label>This pet is adopted</label>
        <input id="c${this.item.id}" type="checkbox" ${this.item.isAdopted ? 'checked' : ''}>
        <span>${this.item.name}</span> -
        <span>${this.item.breed}</span> -
        <span> ${this.item.owner}</span> -
        <span class="delete" id="d${this.item.id}">🗑️</span>
        </li>`;
    }
}
