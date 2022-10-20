import { Component } from "./component.js";
export class MenuList extends Component {
}
constructor(public, selector, string);
{
    super();
    this.storeService = new Store();
    if (this.storeService.getStore().length === 0) {
        this.pets = [...PETS];
        this.storeService.setStore(this.pets);
    }
    else {
        this.pets = this.storeService.getStore();
    }
    this.manageComponent();
}
