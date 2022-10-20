import { Component } from './component.js';
import { Menu } from './menu.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        new Menu('header>slot');
    }
    createTemplate() {
        return `
        <header>
        <h1>PETS</h1>
<slot id="menu"></slot>
        
    </header>`;
    }
}
//todos los templates se van a parecer a esta estructura.
//podrias usar en el menu un renderAdd, vamos a practicar con un slot
