import { Component } from './components/old/component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
        <header>
        <h1>PETS</h1>
    </header>`;
    }
}
//todos los templates se van a parecer a esta estructura.
